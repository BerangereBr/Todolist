const bcrypt = require('bcrypt');
const pool = require('../database/ddb');
const jwt = require('jsonwebtoken');

const signUp = (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashed = bcrypt.hash(password, 10);

        const newUser = pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING id, username, email',
            [username, email, hashed]
        );
        res.status(200).json(newUser.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'erreur serveur' });
    }
}

const login = (req, res) => {
    try {
        const { email, password } = req.body;
        const result = pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        const user = result.rows[0]
        if (!user) {
            res.status(400).json({ error: "Utilisateur ou mot de passe incorrect" });
        }
        const correct = bcrypt.compare(password, user.password);
        if (!correct) {
            res.status(400).json({ error: "Utilisateur ou mot de passe incorrect" });
        }
        const token = jwt.sign({
            id: user.id, username: user.username
        },
            JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'erreur serveur' });
    }
};

module.exports = { signUp, login };