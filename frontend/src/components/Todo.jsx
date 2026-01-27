import { useState } from "react";
import { createTodo, getAllTodos, checkTodo, deleteTodo } from "../services/todo";
import { useEffect } from "react";
import '../styles/dashboard.scss';
import deleteHover from '../assets/images/delete-hover.png';
import deleteBin from '../assets/images/delete.png';

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
    const handleCheck = async (todo) => {
        setTodos(prev =>
            prev.map(t =>
                t.id === todo.id ? { ...t, is_completed: !t.is_completed } : t
            )
        );
        try {
            await checkTodo(todolist_id, todo.id)
        } catch (error) {
            console.log("Erreur lors de la mise à jour :", error);
            // rollback en cas d'erreur
            setTodos(prev =>
                prev.map(t =>
                    t.id === todo.id ? { ...t, is_completed: todo.is_completed } : t
                )
            );
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

    const sortedTodos = [...todos].sort((a, b) => Number(a.is_completed) - Number(b.is_completed));

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); handleCreate() }} className="todo-form">
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Nouvelle tâche..."></input>
                <button type='submit' className="todo-form-btn">
                    <span className="add-text">Ajouter</span>
                </button>
            </form>
            <div className='todo-container-list'>
                {sortedTodos.map(t => (
                    <div key={t.id} className={`todo-item ${t.is_completed ? "completed" : ""}`}>
                        <input type="checkbox"
                            className="todo-checkbox"
                            checked={t.is_completed}
                            onChange={() => handleCheck(t)}>
                        </input>
                        {t.description}
                        <button onClick={() => handleDelete(t.id)}>
                            <img
                                src={deleteBin}
                                alt="delete"
                                className="delete-icon"
                                onMouseOver={e => (e.currentTarget.src = deleteHover)}
                                onMouseOut={e => (e.currentTarget.src = deleteBin)}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todo;