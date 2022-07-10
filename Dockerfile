FROM node:18.1-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .

EXPOSE 4000
CMD ["npm","run","start:dev"]



