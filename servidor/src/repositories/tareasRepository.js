const {EntityTareas} = require('../db');

const createTareaRepository = async ({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad}) => {

    const newTarea = await EntityTareas.create({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad})
        return newTarea;
    }

    module.exports = {
    createTareaRepository
    }