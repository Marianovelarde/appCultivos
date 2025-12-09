const {EntityUsers} = require('../db');
const bcrypt = require('bcrypt');

const createUserRepository = async (usuario, contraseña) => {
  const hash = await bcrypt.hash(contraseña, 10); // 🔒 Encripta
  const newUser = await EntityUsers.create({
    usuario,
    contraseña: hash
  });
  return newUser;
};

const getAllUsersRepository = async () => {
    const users = await EntityUsers.findAll();
    return users;
}

const getUserByIdRepository = async (idUser) => {
    const selectedUser = await EntityUsers.findByPk(idUser);
    return selectedUser;
}

const LoginRepository = async (usuario, contraseña) => {
  const user = await EntityUsers.findOne({ where: { usuario } });
  if (!user) return null;

  const validPassword = await bcrypt.compare(contraseña, user.contraseña);
  if (!validPassword) return null;

  return user;
};

module.exports = {
    createUserRepository,
    getAllUsersRepository,
    getUserByIdRepository,
    LoginRepository
}