const {EntityCultivos, EntityTareas, EntityUsers} = require('../db');


const createCultivoRepository = async ({nombre,fechaDeInicio,fechadeFinal,notas, idUser}) => {
    console.log(fechaDeInicio,fechadeFinal, 'en repositorio');
    

    const newCultivo = await EntityCultivos.create({nombre, fechaDeInicio,fechadeFinal, notas, idUser});

    return newCultivo;
}

const getAllCultivosRepository = async () => {
    const cultivos = await EntityCultivos.findAll({
        include: { 
            model: EntityUsers,
            attributes: ['idUser', 'usuario', ]
        },
    //     model: EntityTareas,
    //     attributes: ['idTarea', 'nombre', 'fechaDeInicio', 'fechaDeFinal', 'notas', 'caracter'  ]
    });
    return cultivos;
}

const getCultivosByUserRepository = async (idUser) => {
    return await EntityCultivos.findAll({
        where: { idUser },
        attributes: ["idCultivo", "nombre", "fechaDeInicio", "fechadeFinal", "notas"],
        order: [["fechaDeInicio", "ASC"]],
    });
};

const deleteCultivoRepository = async (idCultivo) => {
    const deleteCultivo = await EntityCultivos.destroy({ where: { idCultivo } });
    return deleteCultivo;

}
const updateCultivoRepository = async (idCultivo, updateData) => {
    const updatedCultivo = await EntityCultivos.update(updateData, {
        where: { idCultivo },

    });
    return updatedCultivo;
}
module.exports = {
    createCultivoRepository,
    getAllCultivosRepository,
    getCultivosByUserRepository,
    deleteCultivoRepository,
    updateCultivoRepository
}