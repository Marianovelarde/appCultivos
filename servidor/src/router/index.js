const express = require('express');
const userRoutes = require('../routes/userRoutes');
const cultivoRoutes = require('../routes/cultivosRoutes');

const router = express.Router();  

router.use('/', userRoutes)
router.use('/', cultivoRoutes)

module.exports = router;