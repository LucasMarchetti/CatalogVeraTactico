
// Styles
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contenedor">
            <span id="contact" />
            <h1 className="titleContact">
                Contacto
            </h1>
            <div className="cardsContact">
                <div className="carta">
                    <h1>Teléfono</h1>
                    <p>+54-3834-984529</p>
                </div>
                <div className="carta">
                    <h1>Email</h1>
                    <p>romeocesarvera@gmail.com</p>
                </div>
                <div className="carta">
                    <h1>Ubicación</h1>
                    <p>San Fernando del Valle de Catamarca, Catamarca</p>
                    <p>Esquina Vicario Segura y La Rioja</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;