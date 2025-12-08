import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate;
    const { signUp } = useUser;

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
        <form onSubmit={handlesubmit}>
            <h2>Créer un compte</h2>
            <label for="name">Nom</label>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
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
            <button type="submit">S'inscrire</button>
        </form>
    )
}

export default SignUp;