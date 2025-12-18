import { useState } from "react";
import { getAllTodolists, createTodolist, deleteTodolist } from "../services/todolist";
import { useEffect } from "react";
import Todo from "./Todo";

function Todolist() {
    const [todolists, setTodolists] = useState([]);
    const [name, setName] = useState('');

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
            <ul>
                {todolists.map(todo => (
                    <li key={todo.id}>{todo.name}
                        <button onClick={() => handleDelete(todo.id)}>Supprimer</button>
                        <Todo todolist_id={todo.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todolist;