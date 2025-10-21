const {
    createUserService,
    getAllUsersRepositoryService} = require('../services/userService');

const createUserControllers = async (req, res) => {
    const {usuario, contraseña} = req.body; 


    try {       
         const newUser =  await createUserService(usuario, contraseña);
      res.status(201).json({
      mensaje: 'Usuario creado correctamente',
      id: newUser.idUser,  // o newUser.id si ese es el campo real
      usuario: usuario
    });

    } catch (error) {
        res.status(500).json({error: error.message});
    }  
}
const getAllUsersControllers = async (req, res) => {
  try {
    const users = await getAllUsersRepositoryService();  

    if (!users) {
      return res.status(404).json({ message: 'No se encontraron usuarios' });
    }

    return res.status(200).json({
      message: 'Lista de usuarios obtenida correctamente',
      cantidad: users.length,
      usuarios: users
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
    createUserControllers,
    getAllUsersControllers
}