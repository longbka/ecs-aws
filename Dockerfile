FROM node:20-alpine

#config working directory
WORKDIR /app
COPY package.json .
RUN npm install

#bundle app source code
COPY . ./

EXPOSE 8080
CMD ["npm", "start"]