const zmq = require("zeromq")
const address = process.env.ZMQ_ADDRESS || `tcp://*:3000`;
const pub_topic = "kitty cats";

async function run() {
  const sock = new zmq.Publisher

  console.log(`trying for: ${address}`);
  await sock.bind(address);
  console.log(`Publisher bound to ${address}`);

  var counter = 0;

  while (true) {
    console.log("sending a msg envelope " + counter)
    await sock.send([pub_topic, counter])
    counter++;
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

run()