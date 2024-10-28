const device = require("./awsconnection");
// Function to send data to AWS IoT Core
const sendData = (topic, IoTDevice3) => {
  console.log(`Sending data to AWS IoT Core:`, IoTDevice3);
  return device.publish(topic, JSON.stringify(IoTDevice3));
};

// Handler for turning on the motor
const turnOnLights = async (req, res) => {
  const topic = "Sensor";
  //const topic = "home/helloworld";
  const IoTDevice3 = "Lights on";
  //const IoTDevice3 = { status: "luz on" };

  try {
    await sendData(topic, IoTDevice3);
    res.json({ message: "Lights on" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

// Handler for turning off the motor
const turnOffLights = async (req, res) => {
  const topic = "Sensor";
  //const topic = "home/helloworld";
  const IoTDevice3 = "Lights off";
  //const IoTDevice3 = { status: "luz off" };

  try {
    await sendData(topic, IoTDevice3);
    res.json({ message: "Lights off" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

module.exports = { turnOnLights, turnOffLights };
