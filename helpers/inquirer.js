const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "opcion",
    message: "Que decea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear una nueva tarea`,
      },
      {
        value: "2",
        name: `${"2.".green} Ver las tareas existentes`,
      },
      {
        value: "3",
        name: `${"3.".green} Ver las tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Ver las tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Borrar tarea`,
      },
      {
        value: "7",
        name: `${"7.".green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("====================================".green);
  console.log("       Seleccione una opcion".white);
  console.log("====================================\n".green);

  const { opcion } = await inquirer.prompt(questions);
  return opcion;
};

const pausa = async () => {
  const questions = [
    {
      type: "input",
      name: "pausa",
      message: `Presione ${"ENTER".red} continuar.`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(questions);
};

const LeerInput = async (message) => {
  const questions = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Ingresar tarea";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(questions);
  return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, index) => {
    const i = `${index + 1}.`.green;
    return {
      value: tarea.id,
      name: `${i} ${tarea.desc}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + "Cancelar",
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Seleccione la tarea a borrar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirmar = async (message) => {
  const questions = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(questions);
  return ok;
};

const mostrarListadoCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, index) => {
    const i = `${index + 1}.`.green;
    return {
      value: tarea.id,
      name: `${i} ${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    };
  });

  const questions = [
    {
      type: "checkbox",
      name: "ids",
      message: "Seleccione las tareas a completar",
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(questions);
  return ids;
};

module.exports = {
  inquirerMenu,
  pausa,
  LeerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
};
