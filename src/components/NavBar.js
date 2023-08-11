import React from "react";
import "../styles/navbar.css";
import { useState } from "react";

function NavBar() {
    const [nav, setnav] = useState(false);
    const [navButton, setnavButton] = useState(false);

    const zaid = () => {
        if (window.scrollY > 80) setnav(true);
        else setnav(false);
    };
    window.addEventListener("scroll", zaid);

    return (
        <nav className={nav ? "navbar active" : "navbar"}>
            <div className="max-width">
                <div className="logo">
                    Asem's Portfo<span>lio ❤</span>
                </div>
                <ul className={navButton ? "menu active__menu" : "menu"}>
                    <li>
                        <a onClick={() => setnavButton(!navButton)} href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setnavButton(!navButton)}
                            href="#about-me"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setnavButton(!navButton)}
                            href="#skills"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setnavButton(!navButton)}
                            href="#projects"
                        >
                            projects
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setnavButton(!navButton)}
                            href="#contact"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div
                    onClick={() => setnavButton(!navButton)}
                    className="menu-btn"
                >
                    <i className={navButton ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
