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
        name: "1. Crear una nueva tarea",
      },
      {
        value: "2",
        name: "2. Ver las tareas existentes",
      },
      {
        value: "3",
        name: "3. Ver las tareas completadas",
      },
      {
        value: "4",
        name: "4. Ver las tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("====================================".green);
  console.log("       Seleccione una opcion".green);
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

module.exports = {
  inquirerMenu,
  pausa,
};
