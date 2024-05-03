
// Styles
import "./Contact.css";

// React-Bootstrap
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Contact = () => {
    return (
        <div className="conteiner">
            <span className="hreff"  id="contact" />
            <div className="titleContact">
                <h1>
                    Contacto
                </h1>
            </div>
            <div className="cardGroup">
                <CardGroup style={{display: "flex"}}>
                    <Card style={{margin: "20px"}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: "45px", textDecoration: "underline black"}}>Ubicación</Card.Title>
                            <Card.Text>
                                San Fernando del Valle de Catamarca, Catamarca, Argentina
                            </Card.Text>
                            <Card.Text>
                                Calle Av. Los Glaciares 1234
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{margin: "20px"}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: "45px", textDecoration: "underline black"}}>Teléfono</Card.Title>
                            <Card.Text>
                                +54 3834 325262
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{margin: "20px"}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: "45px", textDecoration: "underline black"}}>Email</Card.Title>
                            <Card.Text>
                                veratactico@gmail.com
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
}

export default Contact;