const {createTareaRepository} = require('../repositories/tareasRepository')

const createTareaService = async ({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo}) => {
    
    console.log(nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo, 'en service');
    
    const nuevaTarea = await createTareaRepository({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo})
if(!nuevaTarea){
    throw new Error('No se pudo crear la tarea');  
}
    return nuevaTarea;
}

module.exports = {
    createTareaService
}