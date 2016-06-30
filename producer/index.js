console.log("=================== PRODUCER ===================")

// const URL = "172.17.0.1:2181"
const URL = "127.0.0.1:2181"
// const topic = "topic"

const KafkaRest = require('kafka-rest')
const kafka = new KafkaRest({ 'url': URL })

kafka.brokers.list((err, brokers) => {
  console.log('broker err -> ', err)
  console.log('broker err -> ', brokers)
})

// kafka.topics.list((err, topics) => {
//   console.log('topics err -> ', err)
//   console.log('topics err -> ', topics)
// })
