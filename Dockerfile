FROM node:boron
MAINTAINER enrico.simonetti@gmail.com

RUN npm install -g mocha co-mocha

WORKDIR "/workdir"
COPY ./thorn /workdir
ENV NODE_PATH=/workdir/node_modules
RUN yarn -s
