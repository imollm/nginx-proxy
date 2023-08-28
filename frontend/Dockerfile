FROM node:18.17-alpine

WORKDIR /app

COPY . /app

# Install dependencies and build the application
RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "serve" ]