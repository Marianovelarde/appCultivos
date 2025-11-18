const express = require('express');
const userRoutes = require('../routes/userRoutes');
const cultivoRoutes = require('../routes/cultivosRoutes');
const tareasRoutes = require('../routes/tareasRoutes');

const router = express.Router();  

router.use('/users', userRoutes)
router.use('/cultivos', cultivoRoutes)
router.use('/tareas', tareasRoutes)

module.exports = router;