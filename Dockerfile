FROM node:22-slim

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json (se disponível)
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Expor a porta que a aplicação utilizará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
