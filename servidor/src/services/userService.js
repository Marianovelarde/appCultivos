const {
    createUserRepository,
    getAllUsersRepository,
    getUserByIdRepository
} = require('../repositories/userRepository');

const createUserService = async (usuario, contraseña) => {
    const newUser = await createUserRepository(usuario, contraseña);

if (!newUser) {
        throw new Error('Error al crear usuario');
    }
    return newUser;
}

const getAllUsersRepositoryService = async () => {
    const users = await getAllUsersRepository();
 if(!users){
        throw new Error('No se encontraron usuarios');
}
return users;
}

const getUserByIdService = async (idUser) => {
    const selectedUser = await getUserByIdRepository(idUser);
    if(!selectedUser){
        throw new Error('Usuario no encontrado');
    }
    return selectedUser;
}
module.exports = {
    createUserService,
    getAllUsersRepositoryService,
    getUserByIdService
}