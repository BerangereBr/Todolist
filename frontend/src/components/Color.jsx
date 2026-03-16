import { useState, useEffect } from "react";
import { themes } from "../styles/themes";
import "../styles/color.scss";
import colorWheel from '../assets/images/color-wheel.png'

function Color() {
    const [theme, setTheme] = useState("orange");
    const [open, setOpen] = useState(false);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        const root = document.documentElement;
        localStorage.setItem("theme", theme)

        Object.entries(themes[newTheme]).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    return (
        <div className="theme-buttons-container">
            <div className={open ? 'theme-buttons-open' : 'theme-buttons'}>
                <button onClick={() => setOpen(!open)} className="button-wheel">
                    <img src={colorWheel} alt='changer de couleur' />
                </button>

                {open && (
                    <div className="theme-menu">
                        {Object.keys(themes).map((t) => (
                            <button
                                key={t}
                                onClick={() => {
                                    changeTheme(t);
                                    setOpen(false);
                                }}
                                className={`theme-button theme-${t}`}
                            >
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Color;