import { useState, useEffect } from "react";
import { getAllTodolists, createTodolist, deleteTodolist } from "../services/todolist";
import Todo from "./Todo";
import arrow from '../assets/images/arrow.png';

function Todolist() {
    const [todolists, setTodolists] = useState([]);
    const [name, setName] = useState('');
    const [open, setOpen] = useState(null);
    const [openMobile, setOpenMobile] = useState(false);
    const BREAKPOINT = 767
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= BREAKPOINT);

    useEffect(() => {
        getAllTodolists().then(res => setTodolists(res.data))
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= BREAKPOINT);
            if (window.innerWidth >= BREAKPOINT) {
                setOpenMobile(false);
            };
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
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
            if (open === id) {
                setOpen(null);
            }
        })
    }
    const handleToggleMobile = () => {
        if (!isDesktop) {
            setOpenMobile(prev => !prev);
        }
    }
    const handleSetOpen = (id) => {
        setOpen(id);
        if (!isDesktop) {
            setOpenMobile(false);
        }
    }
    return (
        <div className="todolists-container">
            <div className="todolists-list-container">
                {!isDesktop && <button className="todolists-title" onClick={handleToggleMobile}>Mes Todolists<img src={arrow} alt='todolist' className={`todolist-title-icon ${openMobile ? "open" : ""}`} /></button>}
                <div className={`todolists-list${openMobile ? " active" : ""}`}>
                    <form className="todolist-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleCreate();
                        }}>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Nouvelle todolist..."></input>
                        <button type="submit" className="add-btn" aria-label="ajouter-todolist">
                            <span className="add-text">Ajouter</span>
                        </button>
                    </form>
                    {todolists.map(todo => (
                        <div key={todo.id} className={`todolist-name${open === todo.id ? " active" : ""}`}>
                            <button className="todolist-name-item" onClick={() => handleSetOpen(todo.id)}>
                                {todo.name}
                            </button>
                            <button onClick={() => handleDelete(todo.id)} className="todolist-delete-btn">
                                <span className="delete-icon"></span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="todo-container">
                {open && <Todo todolist_id={open} />}
            </div>
        </div>
    )
}

export default Todolist;