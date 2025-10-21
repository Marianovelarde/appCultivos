const {createTareaRepository} = require('../repositories/tareaRepository');

const createTareaService = async (nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad) => {
    const nuevaTarea = await createTareaRepository({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad})
if(!nuevaTarea){
    throw new Error('No se pudo crear la tarea');  
}
    return nuevaTarea;
}

module.exports = {
    createTareaService
}