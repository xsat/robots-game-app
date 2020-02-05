FROM node:12.14.1-alpine
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --silent

EXPOSE 3000
CMD ["npm", "start"]
