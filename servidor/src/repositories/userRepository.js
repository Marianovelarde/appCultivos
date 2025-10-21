const {EntityUsers} = require('../db');


const createUserRepository = async (usuario, contraseña) => {

    const newUser = await EntityUsers.create({usuario, contraseña});
    return newUser;
}

const getAllUsersRepository = async () => {
    const users = await EntityUsers.findAll();
    return users;
}

module.exports = {
    createUserRepository,
    getAllUsersRepository
}