const {createTareaService } = require('../services/tareaService')

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

module.exports = {
    crateTareaController
}