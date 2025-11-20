const {EntityUsers} = require('../db');


const createUserRepository = async (usuario, contraseña) => {

    const newUser = await EntityUsers.create({usuario, contraseña});
    return newUser;
}

const getAllUsersRepository = async () => {
    const users = await EntityUsers.findAll();
    return users;
}

const getUserByIdRepository = async (idUser) => {
    const selectedUser = await EntityUsers.findByPk(idUser);
    return selectedUser;
}

module.exports = {
    createUserRepository,
    getAllUsersRepository,
    getUserByIdRepository
}