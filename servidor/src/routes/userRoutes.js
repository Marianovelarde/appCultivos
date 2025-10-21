const express = require('express');
const { createUserControllers, getAllUsersControllers } = require('../controllers/userControllers');

const router = express.Router();

router.post('/users', createUserControllers)
router.get('/users', getAllUsersControllers)

module.exports = router;