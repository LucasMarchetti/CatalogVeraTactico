
// React
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Styles
import "./Navbar.css";
import LogoMarca from "./images/logo.png";

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    return (
        <div className="header">
            <nav className="navbar"> 
                <a href="/" className="logoTitle" style={{ textDecoration: "none" }} >
                    <img src={LogoMarca} alt="Img Logo" />
                    <h1 style={{ color: "black" }}>Vera Táctico</h1>
                </a>
                {click ? (
                    <FaTimes style={{ color: "black" }} className="hamburger" onClick={handleClick} />
                ) : (
                    <FaBars style={{ color: "black" }} className="hamburger" onClick={handleClick} />
                )}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item" >
                        <a href="#inicio" style={{ textDecoration: "none" }} onClick={closeMenu}>
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item" >
                        <a href="#about" style={{ textDecoration: "none" }} onClick={closeMenu}>
                            Acerca de Nosotros
                        </a>
                    </li>
                    <li className="nav-item" >
                        <a href="#catalog" style={{ textDecoration: "none" }} onClick={closeMenu}>
                            Catálogo
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" style={{ textDecoration: "none" }} onClick={closeMenu}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
