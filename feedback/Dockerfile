FROM node:10
WORKDIR /app/feedbackService
COPY package.json /app/feedbackService
RUN npm install
COPY . /app/feedbackService
CMD ["npm","start"]