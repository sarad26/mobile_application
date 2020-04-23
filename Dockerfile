### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
## RUN apt-get update -qq && apt-get install -y curl
## RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
## RUN apt-get update && apt-get install -y nodejs
RUN apk add --update git
RUN npm install
COPY . .
RUN apk add --update git
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/mobile_application /usr/share/nginx/html
