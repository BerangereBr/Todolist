import Signup from "../components/SignUp";
import Login from "../components/Login";
import "../styles/connexion.scss";
import Color from "../components/Color";

function Connexion() {
    return (
        <>
            <header className="header-log">
                <Color />
                <h1>Tout ce que vous avez à faire, au même endroit</h1>
            </header>
            <main className="connexion-container">
                <Login />
                <Signup />
            </main>
        </>
    )
}

export default Connexion;