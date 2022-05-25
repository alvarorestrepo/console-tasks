require("colors");
const {
  inquirerMenu,
  pausa,
  LeerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
} = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/saveFile");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const dataStorage = leerDB();

  if (dataStorage) {
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
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "5":
        // Completar tarea
        const tareasCompletadas = await mostrarListadoCheckList(
          tareas.listadoArr
        );
        tareas.toggleCompletado(tareasCompletadas);
        break;

      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const confirm = await confirmar("¿Desea borrar la tarea?");
          if (confirm) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada".red);
          }
        }
        break;
    }
    guardarDB(tareas.listadoArr);

    if (opt !== "0") await pausa();
  } while (opt !== "7");
};
main();
