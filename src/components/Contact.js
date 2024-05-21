
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
                    <p>+54-3834-549875</p>
                </div>
                <div className="carta">
                    <h1>Email</h1>
                    <p>veratactico@gmail.com</p>
                </div>
                <div className="carta">
                    <h1>Ubicación</h1>
                    <p>San Fernando del Valle de Catamarca, Catamarca</p>
                    <p>Av. Los Milagros 2345</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;