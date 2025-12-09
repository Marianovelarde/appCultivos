const {
  createUserService,
  getAllUsersRepositoryService,
  getUserByIdService,
  loginService
} = require('../services/userService');

const generateToken = require('../utils/generateToken');


// ✅ CREAR USUARIO (contraseña ya va encriptada desde el service)
const createUserControllers = async (req, res) => {
  const { usuario, contraseña } = req.body;

  if (!usuario || !contraseña) {
    return res.status(400).json({ message: "Usuario y contraseña son requeridos" });
  }

  try {
    const newUser = await createUserService(usuario, contraseña);

    res.status(201).json({
      mensaje: 'Usuario creado correctamente',
      id: newUser.idUser,
      usuario: newUser.usuario
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// ✅ OBTENER TODOS LOS USUARIOS
const getAllUsersControllers = async (req, res) => {
  try {
    const users = await getAllUsersRepositoryService();

    if (!users || users.length === 0) {
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


// ✅ OBTENER USUARIO POR ID
const getUserByIdControllers = async (req, res) => {
  const { idUser } = req.params;

  if (!idUser) {
    return res.status(400).json({ message: 'El id del usuario es requerido' });
  }

  try {
    const user = await getUserByIdService(idUser);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.status(200).json({
      message: 'Usuario obtenido correctamente',
      usuario: user
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


// ✅ LOGIN SEGURO CON JWT
const loginControllers = async (req, res) => {
  const { usuario, contraseña } = req.body;

  if (!usuario || !contraseña) {
    return res.status(400).json({ message: "Usuario y contraseña son requeridos" });
  }

  try {
    const user = await loginService(usuario, contraseña);

    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // ✅ Generar token
    const token = generateToken(user);

    return res.status(200).json({
      message: 'Inicio de sesión exitoso',
      usuario: {
        idUser: user.idUser,
        usuario: user.usuario
      },
      token
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createUserControllers,
  getAllUsersControllers,
  getUserByIdControllers,
  loginControllers
};
