const pool = require('../databe/db');

const createTodolist = async (req, res) => {
    const name = req.body;
    const user = rep.params.id
    try {
        const result = await pool.query(
            'INSERT INTO todolist (user_id, name) VALUES (1$, 2$) RETURNING*',
            [user, name]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Erreur création todolist' })
    }
}

const getAllTodolidts = async (req, res) => {
    const userId = req.user.id
    try {
        const result = await pool.query('SELECT * FROM todolist WHERE user_id = $1 ORDER BY created_at DESC',
            [userId]
        );
        res.status(200).json(result.rows)
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des todolists' })
    }
}

const getTodolidts = async (req, res) => {
    const userId = req.user.id;
    const todolistId = req.params.id;
    try {
        const result = await pool.query('SELECT * FROM todolist WHERE id = $1 AND user_id = $2',
            [todolistId, userId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Todolist non trouvée' });
        }

        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la todolist' })
    }
}

module.exports = { createTodolist, getAllTodolidts, getTodolidts }