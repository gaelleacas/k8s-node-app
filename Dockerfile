FROM node:10 AS builder

WORKDIR /app

COPY . /app
RUN yarn --pure-lockfile

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app /app
COPY . /app

EXPOSE 8080

CMD ["yarn", "start"]