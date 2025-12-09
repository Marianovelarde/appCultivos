const {createTareaRepository, 
    getAllTareasRepository, 
    getTareasByIdRepository,
    updateTareaRepository,
    deleteTareasRepository,
    completeTareaRepository,
getTareasFiltradasRepository} = require('../repositories/tareasRepository')

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

const updateTareaService = async (idTarea, updateData) => {
  try {
    console.log("ID TAREA:", idTarea);
    console.log("DATA EN SERVICE:", updateData);

    const tarea = await updateTareaRepository(idTarea, updateData);

    if (!tarea) {
      throw new Error("No se encontró ninguna tarea con ese ID");
    }

    return tarea;
  } catch (error) {
    console.error("❌ ERROR REAL EN SERVICE:", error);
    throw error; 
  }
};

const deleteTareaService = async (idTarea) => {
    const tarea = await deleteTareasRepository(idTarea)
    if(!tarea){
        throw new Error('No se pudo eliminar la tarea');
    }
    return tarea
}
const completeTareaService = async (idTarea) => {
    const tarea = await completeTareaRepository(idTarea)
    if(!tarea){
        throw new Error('No se pudo completar la tarea');
    }
    return tarea 
}
const getTareasFiltradasService = async (idCultivo, filtros) => {
  const tareas = await getTareasFiltradasRepository(idCultivo, filtros);
if (!tareas) {
    throw new Error("No se pudieron obtener las tareas filtradas");
  }
  return tareas;
}

module.exports = {
    createTareaService,
    getAllTareasService,
    getTareasByIdService,
    updateTareaService,
    deleteTareaService,
    completeTareaService,
    getTareasFiltradasService

}