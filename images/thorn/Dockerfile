FROM node:latest
MAINTAINER enrico.simonetti@gmail.com

RUN apt-get update
RUN apt-get -y dist-upgrade
RUN apt-get install -y vim

RUN apt-get clean
RUN apt-get -y autoremove

RUN npm install -g mocha co-mocha

COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh

WORKDIR "/workspace"
ENTRYPOINT ["/entrypoint.sh"]

CMD ["tail", "-f", "/dev/null"]
