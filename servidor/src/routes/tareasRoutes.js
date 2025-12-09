const express = require('express');

const { crateTareaController, 
    getAllTareasController, 
    getTareasByIdController,
    updateTareaController,
    deleteTareaController,
    completeTareaController,
getTareasFiltradasController } = require('../controllers/tareasControllers');

const router = express.Router();

router.post('/create/:idCultivo', crateTareaController);
router.get('/', getAllTareasController);
router.get('/:idCultivo', getTareasByIdController);
router.put('/:idTarea', updateTareaController);
router.delete('/delete/:idTarea', deleteTareaController);
router.put('/complete/:idTarea', completeTareaController);
router.get('/filtrar/:idCultivo', getTareasFiltradasController);

module.exports = router;