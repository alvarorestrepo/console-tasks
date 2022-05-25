const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((id) => {
      listado.push(this._listado[id]);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }
  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
    // return tarea;
  }

  cargarTareasFromArray(arr) {
    arr.forEach((tarea) => {
      this.crearTarea(tarea.id);
    });
  }
}

module.exports = Tareas;
