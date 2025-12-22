import { useState } from "react";
import { createTodo, getAllTodos, deleteTodo } from "../services/todo";
import { useEffect } from "react";
import '../styles/dashboard.scss';

function Todo({ todolist_id }) {
    const [todos, setTodos] = useState([]);
    const [description, setDescription] = useState("");
    useEffect(() => {
        getAllTodos(todolist_id).then(res => setTodos(res.data))
    }, [todolist_id]
    )
    const handleCreate = async () => {
        try {
            await createTodo(todolist_id, { description }).then(res => {
                setTodos([...todos, res.data]);
                setDescription('');
            });
        } catch (error) {
            console.log("Erreur lors de la création :", error);
        }
    }

    const handleDelete = async (todo_id) => {
        try {
            await deleteTodo(todolist_id, todo_id).then(() => {
                setTodos(todos.filter(t => t.id !== todo_id))
            })
        } catch (error) {
            console.log("Erreur lors de la suppression :", error);
        }
    }

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); handleCreate() }}>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <button type='submit'>Ajouter</button>
            </form>
            <ul className='todo-container'> {todos.map(t => (
                <li key={t.id}>{t.description}
                    <button onClick={() => handleDelete(t.id)}>Supprimer</button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Todo;