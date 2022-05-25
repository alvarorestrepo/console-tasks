require("colors");
const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }
  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, index) => {
      const idx = `${index + 1}`.green;
      const { desc, completadoEn } = tarea;
      const completado = completadoEn ? "Completada".green : "Pendiente".red;
      console.log(`${idx}. ${desc} - ${completado}`);
    });
  }

  listarPendientesCompletadas(completadas = false) {
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const completado = completadoEn ? "Completada".green : "Pendiente".red;
      if (completadas) {
        contador += 1;
        if (completadoEn) {
          console.log(
            `${contador.toString().green}. ${desc} - ${completadoEn}`
          );
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log(`${contador.toString().green}. ${desc} - ${completado}`);
        }
      }
    });
  }

  borrarTarea(id = "") {
    if (!this._listado[id]) return;
    delete this._listado[id];
  }

  toggleCompletado(ids = []) {
    ids.forEach((id) => {
      if (!this._listado[id]) return;
      const tarea = this._listado[id];
      tarea.completadoEn = new Date().toISOString();
    });
    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
