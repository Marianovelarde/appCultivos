const e = require("express");
const { createCultivoService, getAllCultivosService, getCultivosByUserService, deleteCultivoService, updateCultivoService } = require("../services/cultivoService");

const createCultivoController = async (req, res) => {
  try {
    const { nombre, fechaDeInicio, fechadeFinal, notas, idUser } = req.body;
    console.log('controllers:', req.body);

    const nuevoCultivo = await createCultivoService(nombre, fechaDeInicio, fechadeFinal, notas,  idUser);

    if (nuevoCultivo) {
      return res.status(201).json(nuevoCultivo);
    }
    return res.status(400).json({ message: 'No se pudo crear el cultivo' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};

const getAllCultivosControllers = async (req,res) => {

    try {
        
        const getAllCultivos = await getAllCultivosService();
        return res.status(200).json(getAllCultivos);
    } catch (error) {
        res.status(500).json({message: 'Error del servidor', error: error.message});
    }
}
const getCultivosByUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const cultivos = await getCultivosByUserService(id);

    res.json(cultivos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los cultivos" });
  }
};

const deleteCultivoController = async (req, res) => {
  const { idCultivo } = req.params;
  try {
    const deleteCultivo = await deleteCultivoService(idCultivo);
    if(deleteCultivo) return res.status(200).json({ message: 'Cultivo eliminado correctamente' });
  }
  catch (error) {
    res.status(500).json({ message: 'Error al eliminar el cultivo' });
}
}

const updateCultivoController = async (req, res) => {
    const { idCultivo } = req.params;
    const updateData = req.body;
    const updatedCultivo = await updateCultivoService(idCultivo, updateData);
   try {
    if(updatedCultivo) return  res.status(200).json({ message: 'Cultivo actualizado correctamente' });
    else return res.status(400).json({ message: 'No se pudo actualizar el cultivo' });
   } catch (error) {
    return res.status(500).json({ message: 'Error del servidor' });
   }
  }

module.exports = {
    createCultivoController,
    getAllCultivosControllers,
    getCultivosByUserController,
    updateCultivoController,
    deleteCultivoController,
    updateCultivoController
}