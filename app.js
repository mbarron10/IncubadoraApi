const express = require("express");
const cors = require("cors");
const { router } = require("./routes/indexroutes");
const app = express();
require("dotenv").config(); // Load environment variables from .env file

app.use(cors());
app.use("/v1", router);

const PORT = process.env.PORT || 3001;

function main() {
  app.listen(PORT, () => {
    console.log("API esta lista en el puerto:", PORT);
  });
}

main();
