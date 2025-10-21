const { createCultivoService, getAllCultivosService } = require("../services/cultivoService");

const createCultivoController = async (req, res) => {
  try {
    const { nombre, fechaDeInicio, fechaDeFinal, notas, idUser } = req.body;
    console.log('controllers:', req.body);

    const nuevoCultivo = await createCultivoService(nombre, fechaDeInicio, fechaDeFinal, notas,  idUser);

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

module.exports = {
    createCultivoController,
    getAllCultivosControllers
}