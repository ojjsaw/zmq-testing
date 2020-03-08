const zmq = require("zeromq")
const address = process.env.PUB_INGESTOR_PORT || process.env.ZMQ_ADDRESS || `tcp://127.0.0.1:3000`;
const sub_topic = "kitty cats";

async function run() {
  const sock = new zmq.Subscriber

  console.log(`trying for: ${address}`);
  sock.connect(address)
  sock.subscribe(sub_topic);
  console.log(`Subscriber connected to ${address}`);

  for await (const [topic, msg] of sock) {
    console.log("Topic: " + topic + ", msg: " + msg)
  }
}

run()