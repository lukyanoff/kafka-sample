const URL = "127.0.0.1:2181"

var kafka = require('kafka-node'),
    HighLevelConsumer = kafka.HighLevelConsumer,
    client = new kafka.Client(),
    consumer = new HighLevelConsumer(
        client,
        [ { topic: 'fast-messages' } ],
        { groupId: 'my-group'}
    );


consumer.on('message', function (message) {
    console.log(message);
});
