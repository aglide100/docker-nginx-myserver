# docker-nginx-myserver
Just for my nas...

본 레포는 간단한 도커라이즈된 nginx와 static react 애플리케이션입니다.

기본적으로 env를 통해 reversed proxy와 index.html를 제공해주는 것을 기본적인 목표로합니다.

------
This repo is simple dockerized nginx application...

Basically provide reversed proxy & static index.html depends env file.



<img width="839" alt="image" src="https://user-images.githubusercontent.com/35767154/182404152-eaec18cb-3b5c-4d15-ac47-7495e1357985.png">

### docker-compose

``` 

services:
    nginx:
        container_name: nginx
        build:
            context: .
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
            - Jdownloader2=false
            - Netdata=false
            - Photoprism=false
            - Transmission=false
            - Codeserver=false
            - Jellyfin=false
            - Jellyfin2=false
            - Jenkins=false
            - Nextcloud=false
            - Tomcat=false
            - CasaOS=false
            - Minecraft=false
            - Dynmap=false
    # other services...       
      

networks:
    docker_network:
        driver: bridge
```

----
## Receive environment
    
    - USERNAME: User name when use http basic login
    - USERPWD: User pwd when use http basic login
    - Domain1: domain
    - Domain2: same function at Domain1
    - {servicenames} : proxypass to declared in services..
