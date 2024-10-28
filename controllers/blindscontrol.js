const device = require("./awsconnection");
// Function to send data to AWS IoT Core
const sendData = (topic, IoTDevice6) => {
  console.log(`Sending data to AWS IoT Core:`, IoTDevice6);
  return device.publish(topic, JSON.stringify(IoTDevice6));
};

// Handler for turning on the motor
const servoZero = async (req, res) => {
  const topic = "Sensor";
  const IoTDevice6 = "Servo 0";

  try {
    await sendData(topic, IoTDevice6);
    res.json({ message: "Servo 0" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};
const servo15 = async (req, res) => {
  const topic = "Sensor";
  const IoTDevice6 = "Servo 15";

  try {
    await sendData(topic, IoTDevice6);
    res.json({ message: "Servo 15" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

const servo30 = async (req, res) => {
  const topic = "Sensor";
  const IoTDevice6 = "Servo 30";

  try {
    await sendData(topic, IoTDevice6);
    res.json({ message: "Servo 30" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

const servo45 = async (req, res) => {
  const topic = "Sensor";
  const IoTDevice6 = "Servo 45";

  try {
    await sendData(topic, IoTDevice6);
    res.json({ message: "Servo 45" });
  } catch (error) {
    console.error("Error sending data to AWS IoT Core:", error);
    res.status(500).json({ message: "Error sending data to IoT device" });
  }
};

module.exports = { servoZero, servo15, servo30, servo45 };
