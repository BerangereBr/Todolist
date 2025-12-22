import Signup from "../components/SignUp";
import Login from "../components/Login";
import "../styles/connexion.scss";

function Connexion() {
    return (
        <main className="connexion-container">
            <Login />
            <Signup />
        </main>
    )
}

export default Connexion;