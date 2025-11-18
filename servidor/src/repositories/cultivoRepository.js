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
    const cultivos = await EntityCultivos.findOne({
        where: { idUser },
        include: { 
            model: EntityUsers,
            attributes: ['idUser', 'usuario', ]
        }
    }) 
    return cultivos;
}

module.exports = {
    createCultivoRepository,
    getAllCultivosRepository,
    getCultivosByUserRepository
}