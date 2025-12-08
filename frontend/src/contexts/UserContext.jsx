import { useState } from "react";
import { Signup, Signin } from "../services/connexion";
import { UserContext } from "./AuthContext"

export function UseProvider({ children }) {
    const [user, setUser] = useState(null)

    async function login(email, password) {
        try {
            const res = await Signin({ email, password });

            setUser(res.data.user);
            localStorage.setItem("token", res.data.token);
            return res.data.user;
        } catch (err) {
            console.log("Erreur login :", err.response?.data);
            throw err;

        }
    }

    async function signUp(name, email, password) {
        try {
            const res = await Signup({ name, email, password });

            setUser(res.data.user);
            localStorage.setItem("token", res.data.token);
            return res.data.user;
        } catch (err) {
            console.log("Erreur signup :", err.response?.data);
            throw err;

        }
    }

    async function logout() {
        localStorage.removeItem("token");
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, login, signUp, logout }}>
            {children}
        </UserContext.Provider>
    )
}