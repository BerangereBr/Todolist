import { useState } from "react";
import { getAllTodolists, createTodolist, deleteTodolist } from "../services/todolist";
import { useEffect } from "react";
import Todo from "./Todo";

function Todolist() {
    const [todolists, setTodolists] = useState([]);
    const [name, setName] = useState('');
    const [open, setOpen] = useState(null);

    useEffect(() => {
        getAllTodolists().then(res => setTodolists(res.data))
    }, []);

    const handleCreate = () => {
        createTodolist({ name }).then(res => {
            setTodolists([...todolists, res.data]);
            setName('');
        });
    }

    const handleDelete = (id) => {
        deleteTodolist(id).then(() => {
            setTodolists(todolists.filter(t => t.id !== id))
        })
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleCreate();
            }}>
                <input value={name} onChange={e => setName(e.target.value)}></input>
                <button type="submit">Ajouter</button>
            </form>
            <div className="todolists-container">
                <ul className="todolists-names">
                    {todolists.map(todo => (
                        <li key={todo.id} className="todolist-list">

                            <button className="todolist-name-item" onClick={() => setOpen(todo.id)}>
                                {todo.name}
                            </button>
                            <button onClick={() => handleDelete(todo.id)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
                <div className="todo-container">
                    {open && <Todo todolist_id={open} />}
                </div>
            </div>
        </div>
    )
}

export default Todolist;