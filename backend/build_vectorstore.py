from pathlib import Path
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
import os
from dotenv import load_dotenv

load_dotenv()

def build_vectorstore():
    md_dir = Path("data")
    docs = []

    # 遍历所有 .md 文件并加载为 Document
    for md_file in md_dir.glob("*.md"):
        loader = TextLoader(str(md_file), encoding="utf-8")
        docs.extend(loader.load())

    # 切分 chunk
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=512,
        chunk_overlap=50,
        separators=["\n\n", "\n", ".", "!", "?", ",", " "]
    )
    chunks = splitter.split_documents(docs)
    print(f"📄 Loaded {len(docs)} documents, split into {len(chunks)} chunks.")

    # 嵌入向量
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.from_documents(chunks, embeddings)

    # 保存向量数据库
    if not os.path.exists("faiss_index"):
        os.makedirs("faiss_index") 
    vectorstore.save_local("faiss_index")

if __name__ == "__main__":
    build_vectorstore()