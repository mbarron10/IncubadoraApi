const awsIot = require("aws-iot-device-sdk");
require("dotenv").config(); // Load environment variables from .env file

const private_key = process.env.PRIVATE_KEY;
const certificado_dispo = process.env.CERTIFICADO_DISPO;
const AmazonRootCA1 = process.env.AMAZON_ROOT_CA1;
// Create a persistent IoT device connection

const device = awsIot.device({
  clientId: "marco_esp32dht11",
  host: "a3todvehpsou32-ats.iot.us-east-2.amazonaws.com",
  port: 8883,
  keyPath: private_key,
  certPath: certificado_dispo,
  caPath: AmazonRootCA1,
  //keyPath: "./private_key.key",
  // certPath: "./certificado_dispo.crt",
  // caPath: "./AmazonRootCA1.pem",
});

device.on("connect", function () {
  console.log("Connected to AWS IoT Core");
});

device.on("error", function (error) {
  console.error("Error connecting to AWS IoT Core:", error);
});

module.exports = device;
