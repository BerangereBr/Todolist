import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function Logout() {
    const { logout } = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/connexion");
    }
    return (
        <button onClick={handleLogout}>
            Se déconnecter
        </button>
    )
}

export default Logout;