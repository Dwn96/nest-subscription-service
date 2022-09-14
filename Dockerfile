FROM node:alpine

# Create app directory
COPY . /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD npm run start
