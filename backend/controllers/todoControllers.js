const pool = require('../database/db');

const createTodo = async (req, res) => {
    const { description } = req.body;
    const todolist_id = req.params.todolist_id;
    console.log("TODOLIST ID:", todolist_id);

    if (!description) {
        return res.status(400).json({ message: 'Pas de tâche' })
    }
    try {
        const result = await pool.query(
            'INSERT INTO todo (todolist_id, description) VALUES ($1, $2) RETURNING *',
            [todolist_id, description]
        )
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("CREATE TODO ERROR:", error);
        res.status(500).json({ message: 'Erreur création todo' })
    }
}

const getAllTodos = async (req, res) => {
    const todolist_id = req.params.todolist_id;
    if (!todolist_id) {
        return res.status(400).json({ message: "ID de todolist manquant" });
    }
    try {
        const result = await pool.query(
            'SELECT * FROM todo WHERE todolist_id = $1 ORDER BY created_at DESC',
            [todolist_id]);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des todos' })
    }
}

const deleteTodo = async (req, res) => {
    const { todolist_id, todo_id } = req.params;
    const user_id = req.user.id;

    if (!todo_id || !todolist_id) {
        return res.status(400).json({ message: "ID manquant" });
    }
    try {
        const result = await pool.query(
            'DELETE FROM todo t USING todolist tl WHERE t.id=$1 AND t.todolist_id=$2 AND tl.id = t.todolist_id AND tl.user_id = $3 RETURNING t.*',
            [todo_id, todolist_id, user_id]);
        res.status(200).json({
            message: 'Todo supprimée avec succès',
            todo: result.rows[0]
        })
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression' })
    }
}
module.exports = { createTodo, getAllTodos, deleteTodo }