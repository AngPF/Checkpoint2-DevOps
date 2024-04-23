# # Use a imagem Python na versão 3.9-slim como base
# FROM python:3.9-slim

# # Defina o diretório de trabalho como: /app
# WORKDIR /app

# # Copie o arquivo Python da aplicação para o Container
# COPY app98310.py /app/app98310.py

# # Configure o comando padrão para executar o aplicativo Python
# CMD ["python", "app98310.py"]

############################################################################

# # Use a imagem Python na versão 3.9-slim como base
# FROM python:3.9-slim

# # Defina o diretório de trabalho como: /app
# WORKDIR /app

# # Utilize um Argumento para receber o nome da Aplicação no Build
# ARG APP_NAME

# # Copie o arquivo Python da aplicação para o Container
# COPY ${APP_NAME}.py /app/${APP_NAME}.py

# # Configure o comando padrão para executar o aplicativo Python
# CMD ["python", "/app/${APP_NAME}.py"]

############################################################################

FROM python:3.9-slim

WORKDIR /app

ARG APP_NAME

COPY ${APP_NAME}.py /app/${APP_NAME}.py

ENV APP_FILE=${APP_NAME}.py

CMD ["sh", "-c", "python /app/${APP_FILE}"]

