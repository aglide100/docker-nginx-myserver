FROM node:18 AS builder

RUN apt update && apt install -y git
COPY widget/ /widget

WORKDIR /widget 

RUN git clone https://github.com/fghrsh/live2d_api.git
 
RUN mkdir /app

COPY ui/ /app

WORKDIR /app

RUN npm install

RUN npm run build

RUN npm run export

FROM nginx:1.21-alpine AS runtime

ENV LANG=ko_KR.UTF-8 \
    LANGUAGE=ko_KR.UTF-8

COPY --from=builder /app/out/ /usr/share/nginx/html

COPY --from=builder /widget/live2d-widget-hardfork /usr/share/nginx/html/live2d-widget-hardfork

COPY --from=builder /widget/live2d_api /usr/share/nginx/html/live2d_api

RUN apk add --update apache2-utils \
    && rm -rf /var/cache/apk/*

RUN apk add --no-cache --upgrade bash

RUN mkdir -p /etc/nginx/sites-available/locations && \
    mkdir -p /etc/nginx/sites-enabled/locations && \
    mkdir -p /etc/nginx/sites-enabled/common && \
    mkdir -p /var/webdav/file/share && \
    mkdir -p /var/webdav/client_temp && \
    mkdir -p /etc/nginx/conf.d && \
    rm -rf /etc/nginx/sites-enabled/default

COPY nginx.conf /etc/nginx/nginx.conf

#COPY docs/ /usr/share/nginx/

COPY ./conf.d ./etc/nginx/template

COPY cert.conf.template ./etc/nginx/template

COPY entrypoint.sh .

RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

WORKDIR /etc/nginx 
CMD nginx -g "daemon off;"

