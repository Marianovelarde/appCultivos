const {EntityTareas} = require('../db');

const createTareaRepository = async ({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo}) => {
console.log(nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo, 'en repositorio');

    const newTarea = await EntityTareas.create({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo})
        return newTarea;
    }

    const getAllTareasRepository = async () => {
        const tareas = await EntityTareas.findAll()
        return tareas;
    }

    const getTareasByIdRepository = async (idCultivo) => {
        const tareas = await EntityTareas.findAll({
            where: {idCultivo}}
        )
        return tareas;
    }

    module.exports = {
    createTareaRepository,
    getAllTareasRepository,
    getTareasByIdRepository,
    getTareasByIdRepository
    
    }