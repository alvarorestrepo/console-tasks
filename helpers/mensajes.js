require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("====================================".green);
    console.log("       Seleccione una opcion".green);
    console.log("====================================\n".green);
    console.log(`${"1.".cyan} ${"Crear una nueva tarea".red}`);
    console.log(`${"2.".cyan} ${"Ver las tareas existentes".red}`);
    console.log(`${"3.".cyan} ${"Ver las tareas completadas".red}`);
    console.log(`${"4.".cyan} ${"Ver las tareas pendientes".red}`);
    console.log(`${"5.".cyan} ${"Completar tarea(s)".red}`);
    console.log(`${"6.".cyan} ${"Borrar tarea".red}`);
    console.log(`${"0.".cyan} ${"Salir".red}\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opcion: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question(`Presione ${"ENTER".red} continuar.`, (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

module.exports = { mostrarMenu, pausa };
