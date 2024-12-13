const express = require('express');
const cors = require('cors');
const citasRoutes = require('./routes/citas');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));  // Aquí configuras CORS
app.use(express.json());

// Rutas
app.use('/api/citas', citasRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);  // Verifica que esta ruta esté correctamente configurada

// Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
