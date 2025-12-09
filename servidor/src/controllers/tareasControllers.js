
const {createTareaService, 
    getAllTareasService, 
    getTareasByIdService,
    updateTareaService,
    deleteTareaService,
    completeTareaService,
getTareasFiltradasService } = require('../services/tareaService')

const crateTareaController = async (req, res) => {

    const {nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo} = req.body
    console.log(nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo, 'en controllers');
    
    try {
        const nuevaTarea = await createTareaService({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo})
        if(!nombre || !descripcion || !fechaProgramada || !fechaReal || !estado || !caracter || !prioridad || !idCultivo){
            return res.status(400).json({message: 'Faltan datos obligatorios'})
        }
        return res.status(201).json({message: 'Tarea creada exitosamente', data: nuevaTarea})
    } catch (error) {
        console.error(error.message, 'error en controller');
        return res.status(500).json({message: 'Error al crear la tarea', error: error.message})
    }
}

const getAllTareasController = async (req,res) => {

    try {
        const getTareas = await getAllTareasService()
        return res.status(200).json({message: 'Tareas obtenidas exitosamente', data: getTareas})
    } catch (error) {
        return res.status(500).json({message: 'Error al obtener las tareas', error: error.message})
    }
}

const getTareasByIdController = async (req,res) => {
    const {idCultivo} = req.params

    try {
        const tareas = await getTareasByIdService(idCultivo)
        return res.status(200).json({message: 'Tareas obtenidas exitosamente', data: tareas})
    } catch (error) {
        return res.status(500).json({message: 'Error al obtener las tareas', error: error.message})
    }
}

const updateTareaController = async (req,res) => {
    const {idTarea} = req.params

  const {
    nombre,
    descripcion,
    fechaProgramada,
    fechaReal,
    estado,
    caracter,
    prioridad
  } = req.body;

  const updateData = {
    nombre,
    descripcion,
    fechaProgramada,
    fechaReal,
    estado,
    caracter,
    prioridad
  };

  console.log(updateData, 'DATA LIMPIA EN CONTROLLER');
    try {
        const updatedTarea = await updateTareaService(idTarea, updateData)
        if(!updatedTarea){
            return res.status(404).json({message: 'Tarea no encontrada'})
        }
        return res.status(200).json({message: 'Tarea actualizada exitosamente', updatedTarea})
    } catch (error) {
        return res.status(500).json({message: 'Error al actualizar la tarea', error: error.message})
    }
}
const deleteTareaController = async (req,res) => {
    const {idTarea} = req.params

    try {
        const deletedTarea = await deleteTareaService(idTarea)
        return res.status(200).json({message: 'Tarea eliminada exitosamente', data: deletedTarea})
    } catch (error) {
        return res.status(500).json({message: 'Error al eliminar la tarea', error: error.message})
    }
}

const completeTareaController = async (req,res) => {
    const {idTarea} = req.params
    try {
        const tarea = await completeTareaService(idTarea)
        return res.status(200).json({message: 'Tarea completada exitosamente', data: tarea})
    } catch (error) {
        return res.status(500).json({message: 'Error al completar la tarea', error: error.message})
    }
}
const getTareasFiltradasController = async (req, res) => {
  try {
    const { idCultivo } = req.params;
    const { estado, prioridad, caracter, desde, hasta } = req.query;

    const tareas = await getTareasFiltradasService(idCultivo, {
      estado,
      prioridad,
      caracter,
      desde,
      hasta,
    });

    res.json({ data: tareas });
  } catch (error) {
    res.status(500).json({
      message: "Error al filtrar tareas",
      error: error.message,
    });
  }
};

module.exports = {
    crateTareaController,
    getAllTareasController,
    getTareasByIdController,
    updateTareaController,
    deleteTareaController,
    completeTareaController,
    getTareasFiltradasController
}