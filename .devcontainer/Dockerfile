FROM node:12.14-buster-slim

# Install basic utils, chrome, and firefox
RUN \
  apt-get update && \
  apt-get install -y gnupg wget && \
  wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
  apt-get update && apt-get install -y fftw-dev g++ git make python util-linux \
  libvips-dev xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 \
  libasound2 dbus-x11 google-chrome-stable && \
  rm -rf /var/lib/apt/lists/*

# "fake" dbus address to prevent errors
# https://github.com/SeleniumHQ/docker-selenium/issues/87
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null TERM=xterm npm_config_loglevel=warn \
  NPM_CONFIG_PREFIX=/home/node/.npm-global PATH=$PATH:/home/node/.npm-global/bin

USER node

# Install global npm packages
RUN npm i -g gatsby-cli cypress

WORKDIR /app

EXPOSE 8000
