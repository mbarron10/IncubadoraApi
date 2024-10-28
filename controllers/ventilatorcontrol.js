// const awsIot = require("aws-iot-device-sdk");

// // Create a persistent IoT device connection
// const device = awsIot.device({
//   clientId: "marco_esp32dht11",
//   // clientId: "JorgeClientID2",
//   host: "a3todvehpsou32-ats.iot.us-east-2.amazonaws.com",
//   //host: "a29i5hp52i0e8h-ats.iot.us-east-2.amazonaws.com",
//   port: 8883,
//   keyPath: "./private_key.key",
//   certPath: "./certificado_dispo.crt",
//   caPath: "./AmazonRootCA1.pem",
//   // keyPath: "./pruebaled-private.pem.key",
//   // certPath: "./pruebaled.pem.crt",
//   // caPath: "./pruebaled.pem",
// });

// device.on("connect", function () {
//   console.log("Connected to AWS IoT Core");
// });

// device.on("error", function (error) {
//   console.error("Error connecting to AWS IoT Core:", error);
// });
const device = require("./awsconnection");
// Function to send data to AWS IoT Core
const sendData = (topic, IoTDevice2) => {
  console.log(`Sending data to AWS IoT Core:`, IoTDevice2);
  return device.publish(topic, JSON.stringify(IoTDevice2));
};

// Handler for turning on the motor
const turnOnVentilator = async (req, res) => {
  const topic = "Sensor";
  //const topic = "home/helloworld";
  const IoTDevice2 = "Flow on";
  //const IoTDevice2 = { status: "luz on" };

  try {
    await sendData(topic, IoTDevice2);
    res.json({ message: "Flow on" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

// Handler for turning off the motor
const turnOffVentilator = async (req, res) => {
  const topic = "Sensor";
  //const topic = "home/helloworld";
  const IoTDevice2 = "Flow off";
  //const IoTDevice2 = { status: "luz off" };

  try {
    await sendData(topic, IoTDevice2);
    res.json({ message: "Flow off" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

module.exports = { turnOnVentilator, turnOffVentilator };
