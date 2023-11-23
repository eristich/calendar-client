## Fichier : ./react-docker/Dockerfile
FROM node:18.10.0-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]