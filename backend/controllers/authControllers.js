const bcrypt = require('bcrypt');
const pool = require('../database/db');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    console.log(req.body);
    try {
        const { username, email, password } = req.body;
        const hashed = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING id, username, email',
            [username, email, hashed]
        );
        res.status(200).json(newUser.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'erreur serveur' });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        const user = result.rows[0]
        if (!user) {
            return res.status(400).json({ error: "Utilisateur ou mot de passe incorrect" });
        }
        const correct = await bcrypt.compare(password, user.password);
        if (!correct) {
            return res.status(400).json({ error: "Utilisateur ou mot de passe incorrect" });
        }
        const token = jwt.sign({
            id: user.id, username: user.username
        },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.status(200).json({
            user: {
                id: user.id,
                username: user.usename,
                email: user.email
            },
            token
        });
    } catch (error) {
        res.status(500).json({ error: 'erreur serveur' });
    }
};

module.exports = { signUp, login };