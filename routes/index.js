const express = require('express');
const router = express.Router();

// Define rutas
router.get('/', (req, res) => {
  res.send('Bienvenido a la API');
});

// Exporta el router
module.exports = router;
