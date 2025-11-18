const express = require('express');

const {
    createCultivoController,
    getAllCultivosControllers,
getCultivosByUserController} = require('../controllers/cultivoControllers')

const router = express.Router();

router.post('/', createCultivoController)
router.get('/', getAllCultivosControllers)
router.get('/:id', getCultivosByUserController)

module.exports = router;