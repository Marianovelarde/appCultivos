const express = require('express');

const {
    createCultivoController,
    getAllCultivosControllers,
getCultivosByUserController,
updateCultivoController,
deleteCultivoController} = require('../controllers/cultivoControllers')

const router = express.Router();

router.post('/', createCultivoController)
router.get('/', getAllCultivosControllers)
router.get('/:id', getCultivosByUserController)
router.delete('/delete/:idCultivo', deleteCultivoController);
router.put('/edit/:idCultivo', updateCultivoController);

module.exports = router;