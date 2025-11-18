const { createCultivoService, getAllCultivosService, getCultivosByUserService } = require("../services/cultivoService");

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

const getCultivosByUserController = async (req, res) => {
  try {
    const { id } = req.params;

    // 1️⃣ Validar primero el parámetro
    if (!id) {
      return res.status(400).json({ message: 'Debe proporcionar un ID de usuario válido' });
    }

    // 2️⃣ Obtener los cultivos
    const cultivos = await getCultivosByUserService(id);

    // 3️⃣ Verificar si no existen resultados
    if (!cultivos || cultivos.length === 0) {
      return res.status(404).json({ message: `No se encontraron cultivos para el usuario con ID ${id}` });
    }

    // 4️⃣ Respuesta exitosa
    return res.status(200).json(cultivos);

  } catch (error) {
    console.error('Error en getCultivosByUserController:', error);
    return res.status(500).json({
      message: 'Error del servidor al obtener cultivos por usuario',
      error: error.message,
    });
  }
};

module.exports = {
    createCultivoController,
    getAllCultivosControllers,
    getCultivosByUserController
}