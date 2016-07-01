console.log("=================== PRODUCER ===================")

const URL = "127.0.0.1:2181"

const kafka = require('kafka-node')
const Producer = kafka.Producer
const KeyedMessage = kafka.KeyedMessage
const client = new kafka.Client()
const producer = new Producer(client)
const km = new KeyedMessage('key', 'message')

const payloads = [
  { topic: 'topic', messages: 'hi', partition: 0 },
  { topic: 'topic', messages: ['hello', 'world', km] }
]

producer.on('ready', () => {
  producer.send(payloads, (err, data) => {
    console.log(data)
  })
})

producer.on('error', err => console.log(err))
