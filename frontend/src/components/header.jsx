import { useUser } from "../hooks/useUser";
import Color from "./Color";
import Logout from "./Logout";

function Header() {
    const { user } = useUser();
    return (
        <header className="header">
            <div className="header-btn">
                <Color />
                <Logout />
            </div>
            <h1 className="header-title">Bonjour {user?.username}, qu'est ce qu'on fait aujourd'hui ?</h1>
        </header>
    );
}

export default Header;