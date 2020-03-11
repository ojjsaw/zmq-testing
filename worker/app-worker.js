const zmq = require("zeromq")
var ip = require('ip');
const address = process.env.PUB_INGESTOR_PORT || process.env.ZMQ_ADDRESS || `tcp://127.0.0.1:3000`;
const sub_topic = "topic1";

async function run() {
  const sock = new zmq.Subscriber

  console.log(`trying for: ${address}`);
  sock.connect(address)
  sock.subscribe(sub_topic);
  console.log(`Subscriber connected to ${address}`);

  for await (const [topic, msg] of sock) {
    console.log("sub: " + ip.address() + " , " + "Topic: " + topic + ", msg: " + msg)
  }
}

run()