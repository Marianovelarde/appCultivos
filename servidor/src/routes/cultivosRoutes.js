const express = require('express');

const {
    createCultivoController,
    getAllCultivosControllers} = require('../controllers/cultivoControllers')

const router = express.Router();

router.post('/cultivos', createCultivoController)
router.get('/cultivos', getAllCultivosControllers)

module.exports = router;