const express = require("express");
const router = express.Router();
const fs = require("fs");
const PATH_ROUTER = __dirname;

const cleanFileName = (filename) => {
  const clean = filename.split(".").shift();
  return clean;
};

fs.readdirSync(PATH_ROUTER).filter((filename) => {
  const prefixRoute = cleanFileName(filename);
  if (prefixRoute !== "indexroutes") {
    console.log(`Cargando la ruta... ${prefixRoute}`);
    router.use(`/${prefixRoute}`, require(`./${prefixRoute}.js`));
  }
});

module.exports = { router };
