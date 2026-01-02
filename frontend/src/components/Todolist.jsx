import { useState } from "react";
import { getAllTodolists, createTodolist, deleteTodolist } from "../services/todolist";
import { useEffect } from "react";
import Todo from "./Todo";
import deleteHover from '../assets/images/delete-blue-hover.png';
import deleteBlue from '../assets/images/delete-blue.png';

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
            <div className="todolists-container">

                <ul className="todolists-names">
                    <form className="todolist-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleCreate();
                        }}>
                        <input value={name} onChange={e => setName(e.target.value)}></input>
                        <button type="submit" className="add-btn">
                            <span className="add-text">Ajouter</span>
                        </button>
                    </form>
                    {todolists.map(todo => (
                        <li key={todo.id} className="todolist-list">
                            <button className="todolist-name-item" onClick={() => setOpen(todo.id)}>
                                {todo.name}
                            </button>
                            <button onClick={() => handleDelete(todo.id)} className="todolist-delete-btn">
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
                <div className="todo-container">
                    {open && <Todo todolist_id={open} />}
                </div>
            </div>
        </div>
    )
}

export default Todolist;