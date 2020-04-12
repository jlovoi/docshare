FROM alpine

RUN mkdir -p /srv/app/directory/docshare
RUN apk add nodejs && \
    apk add yarn

WORKDIR /srv/app/directory/docshare

COPY package.json /srv/app/directory/docshare
COPY yarn.lock /srv/app/directory/docshare

RUN yarn install

COPY . /srv/app/directory/docshare

EXPOSE 3000

CMD ["yarn", "start:prod"]