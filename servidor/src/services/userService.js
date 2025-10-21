const {
    createUserRepository,
    getAllUsersRepository
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
module.exports = {
    createUserService,
    getAllUsersRepositoryService
}