const express = require('express');

const { crateTareaController } = require('../controllers/tareasControllers');

const router = express.Router();

router.post('/tareas', crateTareaController);

module.exports = router;