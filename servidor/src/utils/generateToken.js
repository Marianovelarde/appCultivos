const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      idUser: user.idUser,
      usuario: user.usuario
    },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );
};

module.exports = generateToken;
