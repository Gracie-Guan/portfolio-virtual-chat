# 选择官方 Python 镜像
FROM python:3.11-slim

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY requirements.txt .

# 复制 build_vectorstore.py
COPY build_vectorstore.py .

# 安装依赖
RUN pip install --no-cache-dir -r requirements.txt

# 复制后端代码和索引文件
COPY . .

# 暴露端口
EXPOSE 8000

# 启动命令
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]