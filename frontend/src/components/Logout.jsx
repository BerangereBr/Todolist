import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function Logout() {
    const { logout } = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    return (
        <button onClick={handleLogout}>
            Se déconncter
        </button>
    )
}

export default Logout;