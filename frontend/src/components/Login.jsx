import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { login } = useUser();

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError();
        setLoading(true);

        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (err) {
            console.log(err);
            setError("Email ou mot de passe incorrect.")
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Loading />;
    }
    return (
        <form onSubmit={handlesubmit} className="login-container">
            <div className="login-title">
                <h2>Se connecter</h2>
            </div>
            <div className="login-form">
                <label htmlFor="login-email">Email :</label>
                <input id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="username"
                    disabled={loading} />
                <label htmlFor="login-password">Mot de passe :</label>
                <input id="login-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    disabled={loading} />
                {error && <p>{error}</p>}
                <button type="submit" disabled={loading}>
                    Se connecter
                </button>
            </div>
        </form>
    )
}

export default Login;