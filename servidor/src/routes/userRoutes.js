const express = require('express');
const { createUserControllers, getAllUsersControllers, getUserByIdControllers, loginControllers } = require('../controllers/userControllers');

const router = express.Router();

router.post('/create', createUserControllers)
router.post('/login', loginControllers);
router.get('/', getAllUsersControllers)
router.get('/:idUser', getUserByIdControllers);

module.exports = router;