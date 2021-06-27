FROM node:10
WORKDIR /app/userInterface
COPY package.json /app/userInterface
RUN npm install
COPY . /app/userInterface
CMD ["npm","start"]