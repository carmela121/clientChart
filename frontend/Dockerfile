FROM node:carbon

# set working directory

WORKDIR /app

RUN npm install
COPY package*.json ./app
COPY . . 
EXPOSE 8080
CMD npm install && npm start
