import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import '../styles/logout.scss';


function Logout() {

    const { logout } = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/connexion");
    }
    return (
        <button onClick={handleLogout} className="btn-logout">
            <span className="icon-logout">Se déconnecter</span>
        </button>
    )
}

export default Logout;