FROM node:18.17.1-alpine

WORKDIR /app

COPY . /app

RUN npm install && npm run build

EXPOSE 4000

CMD ["node", "./dist/app.js"]
