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

const LoginRepository = async (usuario, contraseña) => {
    const user = await EntityUsers.findOne({where: {usuario, contraseña}});
    return user;
}
module.exports = {
    createUserRepository,
    getAllUsersRepository,
    getUserByIdRepository,
    LoginRepository
}