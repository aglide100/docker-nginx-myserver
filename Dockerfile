FROM nginx:1.21-alpine

RUN apk add --update apache2-utils \
    && rm -rf /var/cache/apk/*

RUN apk add --no-cache --upgrade bash


RUN mkdir -p /etc/nginx/sites-available/locations && \
mkdir -p /etc/nginx/sites-enabled/locations && \
mkdir -p /var/webdav/file/share && \
mkdir -p /var/webdav/client_temp && \
mkdir -p /etc/nginx/conf.d && \
rm -rf /etc/nginx/sites-enabled/default

COPY nginx.conf /etc/nginx/nginx.conf

COPY docs/ /usr/share/nginx/

COPY ./conf.d ./etc/nginx/template
COPY cert.conf.template ./etc/nginx/template
COPY /docs/html/index.html.template ./etc/nginx/template

COPY entrypoint.sh .

RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

WORKDIR /etc/nginx 
CMD nginx -g "daemon off;"

