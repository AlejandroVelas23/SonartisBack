const express = require('express');
const router = express.Router();
const { getUsuarios, createCita } = require('../controllers/usersController.js');

// Endpoint para obtener todas las citas
router.get('/', getUsuarios);

// Endpoint para crear una nueva cita
router.post('/', createCita);

module.exports = router;
