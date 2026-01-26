import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useState, useEffect } from "react";
import '../styles/logout.scss';
import logoutIcon from '../assets/images/logout.png';

function Logout() {
    const [sizeWindow, setSizeWindow] = useState(window.innerWidth > 576);
    useEffect(() => {
        const handleResize = () => {
            setSizeWindow(window.innerWidth > 576);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const { logout } = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/connexion");
    }
    return (
        <button onClick={handleLogout} className="btn-logout">
            {sizeWindow ? 'Se déconnecter' : <img src={logoutIcon} alt="logout" className="icon-logout"></img>}
        </button>
    )
}

export default Logout;