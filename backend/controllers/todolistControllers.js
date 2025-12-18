const pool = require('../database/db');

const createTodolist = async (req, res) => {
    const { name } = req.body;
    const user = req.user.id;
    if (!name) {
        return res.status(400).json({ message: "Le nom est requis" });
    }
    try {
        const result = await pool.query(
            'INSERT INTO todolist (user_id, name) VALUES ($1, $2) RETURNING *',
            [user, name]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Erreur création todolist' })
    }
}

const getAllTodolists = async (req, res) => {
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

const getTodolist = async (req, res) => {
    const userId = req.user.id;
    const todolist_id = req.params.id;
    try {
        const result = await pool.query('SELECT * FROM todolist WHERE id = $1 AND user_id = $2',
            [todolist_id, userId]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Todolist non trouvée' });
        }

        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la todolist' })
    }
}

const deleteTodolist = async (req, res) => {
    const todolist_id = req.params.id;
    const user = req.user.id;

    if (!todolist_id) {
        return res.status(400).json({ message: 'ID non trouvé' })
    }
    try {
        const result = await pool.query('DELETE FROM todolist where id=$1 AND user_id=$2 RETURNING *',
            [todolist_id, user]
        )
        if (result.rowCount === 0) {
            return res.status(400).json({ message: 'Todolist introuvable ou non autorisée' });
        }
        res.status(200).json({
            message: 'Todolist supprimée avec succès',
            todolist: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression' })
    }
}
module.exports = { createTodolist, getAllTodolists, getTodolist, deleteTodolist }