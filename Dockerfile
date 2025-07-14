FROM python:3.11

WORKDIR /app

COPY backend/ /app/

RUN pip install --upgrade pip \
 && pip install -r requirements.txt

COPY backend/faiss_index /app/faiss_index

EXPOSE 8080

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]