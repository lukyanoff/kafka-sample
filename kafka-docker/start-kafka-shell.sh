#!/bin/bash
# /sbin/ip route|awk '/default/ { print $3 }'
# # DOCKER_IP=$(echo $DOCKER_HOST | sed -E 's/^tcp:..([^:]+):.+$/\1/g')
# # docker inspect -f '{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $(docker ps -aq)
# DOCKER_IP=172.18.0.2
# ZOO_CONTAINER=$(docker ps | grep zookeeper | awk '{print $1}')
# ZOO_PORT=$(docker port $ZOO_CONTAINER | sed -E 's/.+://g')
# echo $DOCKER_IP
# echo $ZOO_CONTAINER
# echo $ZOO_PORT
# docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -e HOST_IP=$DOCKER_IP -e ZK=zookeeper:2181 -i -t wurstmeister/kafka /bin/bash
HOST_IP=192.168.0.1
ZK=172.17.0.1:2181
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -e HOST_IP=$HOST_IP -e ZK=$ZK -i -t wurstmeister/kafka /bin/bash
