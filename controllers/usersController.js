const pool = require('../db'); // Conexión a la base de datos

// Obtener todos los usuarios
const getUsuarios = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usr_data_x1a');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

// Crear un nuevo usuario
const createCita = async (req, res) => {
    const { ref_pid, ref_nid, dt, rzn } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO ct_event_l5m (ref_pid, ref_nid, dt, rzn) VALUES ($1, $2, $3, $4) RETURNING *',
            [ref_pid, ref_nid, dt, rzn]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error al crear la cita');
    }
};

module.exports = {
    getUsuarios,
    createCita,
};
