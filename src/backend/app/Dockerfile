FROM node:latest

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN npm install
EXPOSE 3001

CMD ["npm", "start"]
