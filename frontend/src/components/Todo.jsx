import { useState } from "react";
import { createTodo, getAllTodos, deleteTodo } from "../services/todo";
import { useEffect } from "react";
import '../styles/dashboard.scss';
import deleteHover from '../assets/images/delete-blue-hover.png';
import deleteBlue from '../assets/images/delete-blue.png';

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
        <>
            <form onSubmit={(e) => { e.preventDefault(); handleCreate() }} className="todo-form">
                <label className="todo-form-new">Nouvelle tâche</label>
                <div className="todo-form-width">
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    <button type='submit' className="todo-form-btn">Ajouter</button>
                </div>
            </form>
            <ul className='todo-container-ul'> {todos.map(t => (
                <li key={t.id}>
                    <input type="checkbox" className="todo-checkbox"></input>
                    {t.description}
                    <button onClick={() => handleDelete(t.id)}>
                        <img
                            src={deleteBlue}
                            alt="delete"
                            className="delete-icon"
                            onMouseOver={e => (e.currentTarget.src = deleteHover)}
                            onMouseOut={e => (e.currentTarget.src = deleteBlue)}
                        />
                    </button>
                </li>
            ))}
            </ul>
        </>
    )
}

export default Todo;