const express = require('express');

const { crateTareaController, getAllTareasController, getTareasByIdController } = require('../controllers/tareasControllers');

const router = express.Router();

router.post('/', crateTareaController);
router.get('/', getAllTareasController);
router.get('/:idCultivo', getTareasByIdController);

module.exports = router;