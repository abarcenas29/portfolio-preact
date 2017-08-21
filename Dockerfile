FROM node:7.10.1-slim

RUN apt-get update
RUN npm install yarn -g
COPY package.json /app/
COPY scripts /app/scripts/
COPY settings.js /app/

WORKDIR /app
RUN yarn
CMD ["yarn", "start:dev"]
