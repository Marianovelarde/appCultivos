const express = require('express');
const {
  createUserControllers,
  getAllUsersControllers,
  getUserByIdControllers,
  loginControllers
} = require('../controllers/userControllers');

const auth = require('../middlewares/auth');

const router = express.Router();

// Rutas públicas
router.post('/create', createUserControllers);
router.post('/login', loginControllers);

// Rutas protegidas
router.get('/', auth, getAllUsersControllers);
router.get('/:idUser', auth, getUserByIdControllers);

module.exports = router;
