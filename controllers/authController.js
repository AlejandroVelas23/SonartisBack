const pool = require('../db'); // Conexión a la base de datos
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await pool.query('SELECT * FROM usr_data_x1a WHERE eml = $1', [email]);
        if (user.rows.length === 0) {
            return res.status(401).send('Usuario o contraseña incorrectos');
        }

        const isValid = await bcrypt.compare(password, user.rows[0].pwd_hash);
        if (!isValid) {
            return res.status(401).send('Usuario o contraseña incorrectos');
        }

        const token = jwt.sign({ uid: user.rows[0].uid, rl: user.rows[0].rl }, 'SECRET_KEY', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
};

module.exports = {
    login,
};
