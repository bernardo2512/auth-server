FROM node:lts-alpine as builder

WORKDIR /app

COPY . . 

RUN npm install
RUN npm run build

FROM node:lts-alpine as final
WORKDIR /app
COPY --from=builder ./app/build ./build
COPY package.json .
COPY package-lock.json .

RUN npm i -p

EXPOSE 3000

CMD ["npm", "start"]