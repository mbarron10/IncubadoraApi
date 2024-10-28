const device = require("./awsconnection");
// Function to send data to AWS IoT Core
const sendData = (topic, IoTDevice5) => {
  console.log(`Sending data to AWS IoT Core:`, IoTDevice5);
  return device.publish(topic, JSON.stringify(IoTDevice5));
};

// Handler for turning on the motor
const turnOnRotation = async (req, res) => {
  const topic = "Sensor";
  //const topic = "home/helloworld";
  const IoTDevice5 = "Giro";
  //const IoTDevice3 = { status: "luz on" };

  try {
    await sendData(topic, IoTDevice5);
    res.json({ message: "Giro" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

module.exports = { turnOnRotation };
