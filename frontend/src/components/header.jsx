import { useUser } from "../hooks/useUser";

function Header() {
    const { user } = useUser();
    return (
        <header className="header">
            <h1 className="header-title">Bonjour {user?.username}</h1>
        </header>
    );
}

export default Header;