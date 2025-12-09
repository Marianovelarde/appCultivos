const {EntityTareas} = require('../db');
const {Op} = require('sequelize');
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
const updateTareaRepository = async (idTarea, updateData) => {
  console.log(updateData, 'en repository');

  const [updated] = await EntityTareas.update(updateData, {
    where: { idTarea },
    returning: true // ✅ CLAVE para PostgreSQL
  });

  if (updated === 0) return null;

  const tareaActualizada = await EntityTareas.findByPk(idTarea);
  return tareaActualizada;
};

    const deleteTareasRepository = async (idTarea) => {
        const tarea = await EntityTareas.destroy({
            where: {idTarea}
        })
        return tarea
    }

   const completeTareaRepository = async (idTarea) => {
  const [updated] = await EntityTareas.update(
    { estado: "completada" },
    {
      where: { idTarea },
      returning: true, // ✅ CLAVE
    }
  );

  if (updated === 0) return null;

  const tareaActualizada = await EntityTareas.findByPk(idTarea);
  return tareaActualizada; // ✅ DEVUELVE OBJETO REAL
};

const getTareasFiltradasRepository = async (idCultivo, filtros) => {
  const where = { idCultivo };

  if (filtros.estado) {
    where.estado = filtros.estado;
  }

  if (filtros.prioridad) {
    where.prioridad = filtros.prioridad;
  }

  if (filtros.caracter) {
    where.caracter = filtros.caracter;
  }

  if (filtros.desde && filtros.hasta) {
    where.fechaProgramada = {
      [Op.between]: [filtros.desde, filtros.hasta],
    };
  }

  const tareas = await EntityTareas.findAll({ where });

  return tareas;
};

    module.exports = {
    createTareaRepository,
    getAllTareasRepository,
    getTareasByIdRepository,
    updateTareaRepository,
    deleteTareasRepository,
    completeTareaRepository,
    getTareasFiltradasRepository
   
    
    }