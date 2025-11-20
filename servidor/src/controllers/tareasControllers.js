
const {createTareaService, getAllTareasService, getTareasByIdService } = require('../services/tareaService')

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

module.exports = {
    crateTareaController,
    getAllTareasController,
    getTareasByIdController
}