import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { signUp } = useUser();

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await signUp(username, email, password);
            navigate("/dashboard");
        } catch (err) {
            console.log(err);
            setError("Impossible de créer le compte")
        } finally {
            setLoading(false);
        }
    }
    if (loading) {
        return <Loading />;
    }

    return (
        <form onSubmit={handlesubmit} className="signup-container">
            <div className="signup-title">
                <h2>Créer un compte</h2>
            </div>
            <div className="signup-form">
                <label htmlFor="signup-name">Prénom :</label>
                <input id="signup-name"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="username"
                    disabled={loading} />
                <label htmlFor="signup-email">Email :</label>
                <input id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    disabled={loading} />
                <label htmlFor="signup-password">Mot de passe :</label>
                <input id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    disabled={loading} />
                {error && <p>{error}</p>}
                <button type="submit" disabled={loading}>S'inscrire</button>
            </div>
        </form>
    )
}

export default SignUp;