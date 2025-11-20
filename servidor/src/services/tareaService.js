const {createTareaRepository, getAllTareasRepository, getTareasByIdRepository} = require('../repositories/tareasRepository')

const createTareaService = async ({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo}) => {
    
    console.log(nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo, 'en service');
    
    const nuevaTarea = await createTareaRepository({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo})
if(!nuevaTarea){
    throw new Error('No se pudo crear la tarea');  
}
    return nuevaTarea;
}

const getAllTareasService = async () => {
    const tareas = await getAllTareasRepository()
    if(!tareas){
        throw new Error('No se pudieron obtener las tareas');
    }
    return tareas 
}
const getTareasByIdService = async (idCultivo) => {
    const tareas = await getTareasByIdRepository(idCultivo)
    if(!tareas){
        throw new Error('No se pudieron obtener las tareas');
    }   
    return tareas 
}

module.exports = {
    createTareaService,
    getAllTareasService,
    getTareasByIdService

}