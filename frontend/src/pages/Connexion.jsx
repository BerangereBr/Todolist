import Signup from "../components/SignUp";
import Login from "../components/Login";
import "../styles/connexion.scss";

function Connexion() {

    return (
        <>
            <header>
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