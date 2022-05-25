require("colors");
const { inquirerMenu, pausa, LeerInput } = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/saveFile");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const dataStorage = leerDB();
  console.log(dataStorage);

  if (dataStorage.length > 0) {
    tareas.cargarTareasFromArray(dataStorage);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        // Crear tarea
        const desc = await LeerInput("Ingresar tarea: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;
    }
    guardarDB(tareas.listadoArr);

    if (opt !== "0") await pausa();
  } while (opt !== "7");
};
main();
