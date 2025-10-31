#-- dev Image
FROM node:22.12-alpine as base

FROM base as dev
WORKDIR /app

RUN apk add bash

COPY *.json ./
COPY *.ts ./
RUN npm ci

COPY index.html ./
COPY src src
COPY public public

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

#-- build image
FROM base as build
WORKDIR /app


COPY *.json ./
COPY *.ts ./
RUN npm ci

COPY index.html ./
COPY src src
COPY public public

ARG REACT_APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
RUN npm run build

#-- production image
FROM nginx:1.21.6
WORKDIR /app

COPY --from=build /app/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'