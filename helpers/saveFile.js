const fs = require("fs");
const archivo = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  if (!fs.existsSync(archivo)) return;
  try {
    return JSON.parse(fs.readFileSync(archivo, "utf-8"));
  } catch (error) {
    return [];
  }
};

module.exports = { guardarDB, leerDB };
