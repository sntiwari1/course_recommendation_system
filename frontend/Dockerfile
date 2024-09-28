FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

# Start the app
CMD ["npm", "start"]
