const express = require('express');
const router = express.Router();
const { getCitas, createCita } = require('../controllers/citasController');

// Endpoint para obtener todas las citas
router.get('/', getCitas);

// Endpoint para crear una nueva cita
router.post('/', createCita);

module.exports = router;
