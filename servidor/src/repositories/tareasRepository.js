const {EntityTareas} = require('../db');

const createTareaRepository = async ({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo}) => {
console.log(nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo, 'en repositorio');

    const newTarea = await EntityTareas.create({nombre, descripcion, fechaProgramada, fechaReal, estado, caracter, prioridad, idCultivo})
        return newTarea;
    }

    module.exports = {
    createTareaRepository
    }