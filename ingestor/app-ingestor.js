const zmq = require("zeromq")
var ip = require('ip');
const address = process.env.ZMQ_ADDRESS || `tcp://*:3000`;
const pub_topic = "topic1";

async function run() {
  const sock = new zmq.Publisher

  console.log(`trying for: ${address}`);
  await sock.bind(address);
  console.log(`Publisher bound to ${address}`);

  var counter = 0;

  while (true) {
    console.log("sending: " + ip.address() + " , " + counter)
    await sock.send([pub_topic, ip.address() + " , " + counter])
    counter++;
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

run()