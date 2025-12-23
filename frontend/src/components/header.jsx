import { useUser } from "../hooks/useUser";
import Logout from "./Logout";

function Header() {
    const { user } = useUser();
    return (
        <header className="header">
            <h1 className="header-title">Bonjour {user?.username}</h1>
            <div className="btn-logout-container">
                <Logout />
            </div>
        </header>
    );
}

export default Header;