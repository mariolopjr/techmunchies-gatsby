FROM node:12.20-alpine3.11

RUN \
  apk add --no-cache fftw-dev g++ git make python util-linux vips-dev && \
  npm install -g gatsby-cli

WORKDIR /app

EXPOSE 8000
