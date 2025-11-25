const {
    createUserRepository,
    getAllUsersRepository,
    getUserByIdRepository,
    LoginRepository
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

const loginService = async (usuario, contraseña) => {
    const user = await LoginRepository(usuario, contraseña);
    if(!user){
        throw new Error('Credenciales inválidas');
    }  
    return user 
}
module.exports = {
    createUserService,
    getAllUsersRepositoryService,
    getUserByIdService,
    loginService
}