import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { signUp } = useUser();

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError();
        try {
            await signUp(name, email, password);
            navigate("/dashboard");
        } catch (err) {
            console.log(err);
            setError("Impossible de créer le compte")
        }
    }

    return (
        <form onSubmit={handlesubmit} className="signup-container">
            <div className="signup-title">
                <h2>Créer un compte</h2>
            </div>
            <div className="signup-form">
                <label htmlFor="signup-name">Nom :</label>
                <input id="signup-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="username" />
                <label htmlFor="signup-email">Email :</label>
                <input id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email" />
                <label htmlFor="signup-password">Mot de passe :</label>
                <input id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password" />
                {error && <p>{error}</p>}
                <button type="submit">S'inscrire</button>
            </div>
        </form>
    )
}

export default SignUp;