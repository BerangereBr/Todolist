import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate;
    const { login } = useUser();

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError();

        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (err) {
            console.log(err);

            setError("Email ou mot de passe incorrect.")
        }
    }
    return (
        <form onSubmit={handlesubmit}>
            <h2>Se connecter</h2>
            <label for="email">Email :</label>
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            <label for="password">Mot de passe :</label>
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            {error && <p>{error}</p>}
            <button type="submit">Se connecter</button>
        </form>
    )
}

export default Login;