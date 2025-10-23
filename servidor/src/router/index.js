const express = require('express');
const userRoutes = require('../routes/userRoutes');
const cultivoRoutes = require('../routes/cultivosRoutes');
const tareasRoutes = require('../routes/tareasRoutes');

const router = express.Router();  

router.use('/', userRoutes)
router.use('/', cultivoRoutes)
router.use('/', tareasRoutes)

module.exports = router;