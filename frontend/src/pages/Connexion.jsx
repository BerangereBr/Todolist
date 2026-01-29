import Signup from "../components/SignUp";
import Login from "../components/Login";
import "../styles/connexion.scss";
import { useEffect } from "react";
import api from "../services/api";

function Connexion() {
    useEffect(() => {
        api.get('/health')
            .then(() => {
                console.log('Backend réveillé');
            })
            .catch(() => {
                console.log('Backend en cours de réveil...');
            });
    }, []);

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