import React, {  useState } from "react";
import "../styles/nav.css";

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", !isDarkMode);
    };

    return (
        <>
            <nav className={isDarkMode ? "dark" : "light"}>
                <div className="name">
                    <b>DownloaderHub</b>
                </div>
                <div className="button" onClick={toggleDarkMode}>
                    <i
                        className={`darkmode  ${isDarkMode ? "dark" : "light"}`}
                    ></i>
                </div>
            </nav>
        </>
    );
};

export default DarkModeToggle;
