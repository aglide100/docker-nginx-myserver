# docker-nginx-myserver

Just for my nas...

본 레포는 간단하게 nginx로 reverse proxy하기 위해 만든 프로젝트입니다!

static react를 이용하되 env를 통해 간단하게 nginx를 구성합니다

---

This repo is simple reverse proxy server for other application!

Basically used nginx & static react page depends env file.

<img width="839" alt="image" src="https://user-images.githubusercontent.com/35767154/182404152-eaec18cb-3b5c-4d15-ac47-7495e1357985.png">

### docker-compose

```

services:
    nginx:
        container_name: nginx
        image: ghcr.io/aglide100/docker-nginx-myserver:latest
        restart: always
        hostname: nginx
        networks:
            - docker_network
        ports:
            - "80:80"
            - "443:443"
        #volumes:
        #    - /etc/letsencrypt:/etc/letsencrypt
        #    - /home/data/www/certbot:/var/www/certbot
        # env_file:
        #     - /media/test/config/proxyList.env
        environment:
            # Create htpasswd user
            - USERNAME=Hello
            - USERPWD=Hello
            - USERNAME2=Hello
            - USERPWD2=Hello
            - Domain2=example.com
            - Domain1=example.com
            - SSL=false
            #- Jdownloader2=true
            #- Netdata=true
            #- Photoprism=true
            #- Transmission=true
            #- Codeserver=true
            #- Jellyfin=true
            #- Jellyfin2=true
            #- Jenkins=true
            #- Nextcloud=true
            #- Tomcat=true
            #- CasaOS=true
            #- Minecraft=true
            #- Dynmap=true
            #- Bluemap=true
    # other services...


networks:
    docker_network:
        driver: bridge
```

---

## Receive environment

    - USERNAME: User name when use http basic login
    - USERPWD: User pwd when use http basic login
    - Domain1: domain
    - Domain2: same function at Domain1
    - SSL: using tls certification file
    - {servicenames} : proxypass to declared in services..

# Reference

- https://www.npmjs.com/package/react-switch

- https://www.npmjs.com/package/axios

- https://www.npmjs.com/package/classnames

- https://www.npmjs.com/package/cookie

- https://www.npmjs.com/package/framer-motion
