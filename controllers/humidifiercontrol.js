const device = require("./awsconnection");
// Function to send data to AWS IoT Core
const sendData = (topic, IoTDevice4) => {
  console.log(`Sending data to AWS IoT Core:`, IoTDevice4);
  return device.publish(topic, JSON.stringify(IoTDevice4));
};

// Handler for turning on the motor
const turnOnHumidifier = async (req, res) => {
  const topic = "Sensor";
  //const topic = "home/helloworld";
  const IoTDevice3 = "Humi on";
  //const IoTDevice3 = { status: "luz on" };

  try {
    await sendData(topic, IoTDevice3);
    res.json({ message: "Humi on" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

// Handler for turning off the motor
const turnOffHumidifier = async (req, res) => {
  const topic = "Sensor";
  //const topic = "home/helloworld";
  const IoTDevice3 = "Humi off";
  //const IoTDevice3 = { status: "luz off" };

  try {
    await sendData(topic, IoTDevice3);
    res.json({ message: "Humi off" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

module.exports = { turnOnHumidifier, turnOffHumidifier };
