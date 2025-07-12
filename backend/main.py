from fastapi import FastAPI, Request
from pydantic import BaseModel
from rag_pipeline import get_rag_answer
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List, Tuple

app = FastAPI()

# 允许跨域（如需前端本地调试）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatResponse(BaseModel):
    content: str

class ChatRequest(BaseModel):
    question: str
    session_id: str  # 新增字段

# 保持 per-user history
conversation_history: Dict[str, List[Tuple[str, str]]] = {}

@app.post("/chat")
async def chat_endpoint(req: ChatRequest):
    user_id = req.session_id

    if user_id not in conversation_history:
        conversation_history[user_id] = []

    history = conversation_history[user_id][-3:]
    history_text = "\n".join([f"User: {q}\nAI: {a}" for q, a in history])
    combined_question = f"{history_text}\nUser: {req.question}"

    answer = get_rag_answer(combined_question)
    conversation_history[user_id].append((req.question, answer))

    return {"content": answer}


@app.get("/")
def root():
    return {"message": "RAG chatbot API is running"}