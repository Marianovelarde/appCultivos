const {
    createCultivoRepository,
    getAllCultivosRepository,
    getCultivosByUserRepository,
    deleteCultivoRepository,
    updateCultivoRepository
} = require('../repositories/cultivoRepository');


const createCultivoService = async (nombre,fechaDeInicio,fechadeFinal,notas, idUser) => {
    console.log(nombre,fechaDeInicio,fechadeFinal,notas,idUser, 'en servicio');
    
    const nuevoCultivo = await createCultivoRepository({nombre,fechaDeInicio,fechadeFinal,notas, idUser})

    if (!nuevoCultivo) {
        throw new Error('No se pudo crear el cultivo',);
    }
    return nuevoCultivo
}

const getAllCultivosService = async () => {
    const cultivos = await getAllCultivosRepository();
    if(!cultivos){
        throw new Error('No se pudieron obtener los cultivos');
    }
    return cultivos;
}

const getCultivosByUserService = async (idUser) => {

    const cultivos = await getCultivosByUserRepository(idUser);
  try {
      if(!idUser){
          throw new Error('ID de usuario no proporcionado');
      }
      return cultivos
  } catch (error) {
    console.error('Error en getCultivosByUserService:', error);
  }
}

const deleteCultivoService = async (idCultivo) => {
    const deleteCultivo = await deleteCultivoRepository(idCultivo);
    if(!deleteCultivo){
        throw new Error('No se pudo eliminar el cultivo');
    }
    return deleteCultivo
}

const updateCultivoService = async (idCultivo, updateData) => {
    const updatedCultivo = await updateCultivoRepository(idCultivo, updateData);
    if(!updatedCultivo){
        throw new Error('No se pudo actualizar el cultivo');
    }
    return updatedCultivo;
}

module.exports = {
createCultivoService,
getAllCultivosService,
getCultivosByUserService,
deleteCultivoService,
updateCultivoService
}