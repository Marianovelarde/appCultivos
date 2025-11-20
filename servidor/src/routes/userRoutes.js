const express = require('express');
const { createUserControllers, getAllUsersControllers, getUserByIdControllers } = require('../controllers/userControllers');

const router = express.Router();

router.post('/', createUserControllers)
router.get('/', getAllUsersControllers)
router.get('/:idUser', getUserByIdControllers);

module.exports = router;