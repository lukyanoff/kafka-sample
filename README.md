* `cd kafka_docker`
* `docker-compose up -d`
* `docker network ls`
* `/sbin/ip route|awk '/default/ { print $3 }'`
* `$KAFKA_HOME/bin/kafka-topics.sh --create --zookeeper $ZK --replication-factor 1 --partitions 1 --topic fast-messages`
* `$KAFKA_HOME/bin/kafka-topics.sh --create --zookeeper $ZK --replication-factor 1 --partitions 1 --topic summary-markers`
* `$KAFKA_HOME/bin/kafka-topics.sh --list --zookeeper $ZK`
* `docker run --rm --link kafkadocker_zookeeper_1 --net kafkadocker_default producer`
