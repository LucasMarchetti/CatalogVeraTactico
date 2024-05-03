
// Styles
import "./Navbar.css";
import LogoMarca from "./images/logo.png";

const NavBar = () => {
    return (
        <div className="header">
            <nav className="navbar"> 
                <a href="/" className="logoTitle" style={{ textDecoration: "none" }} >
                    <img src={LogoMarca} alt="Img Logo" />
                    <h1 style={{ color: "black" }}>Vera Táctico</h1>
                </a>
                <ul className="nav-menu" >
                    <li className="nav-item" >
                        <a href="#inicio" style={{ textDecoration: "none" }}>
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item" >
                        <a href="#about" style={{ textDecoration: "none" }}>
                            Acerca de Nosotros
                        </a>
                    </li>
                    <li className="nav-item" >
                        <a href="#catalog" style={{ textDecoration: "none" }}>
                            Catálogo
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" style={{ textDecoration: "none" }}>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
