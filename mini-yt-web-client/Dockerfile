FROM node:12.14.0-alpine3.11 AS build

WORKDIR /usr/src/app

ENV NODE_ENV development

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run test && \
    npm run build



FROM node:12.14.0-alpine3.11

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package.json package-lock.json ./

RUN npm i

COPY --from=build /usr/src/app/.next ./.next

EXPOSE 3000

CMD [ "npm", "start" ]
