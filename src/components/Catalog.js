
// Styles 
import "./Catalog.css"

// React Bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Data
import products from "../dataCatalog.json"

const Catalog = () => {
    
    var categoria1 = []
    var categoria2 = []
    var categoria3 = []

    products?.map((current) => {
        if(current.categorias === "1") {
            categoria1.push(current)
        } else if (current.categorias === "2") {
            categoria2.push(current)
        } else {
            categoria3.push(current)
        }
    })

    return (
        <div className="container">
            <div className="catalog" >
                <div className="border3" id="about"/>
                <div className="conteinerAboutUs" >
                    <h1 className="titleAboutUs">
                        Acerca de Nosotros
                    </h1>
                    <div className="contenidoAboutUs" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="border2" id="catalog" />
                <div className="conteiner-titulo" >
                    <h1 className="tituloCatalogo" >
                        Catálogo
                    </h1>
                </div>
                <div className="conteiner-frase" >
                    <h1 className="frase" >
                        Búsca lo que necesites y contáctanos para acordar el envío
                    </h1>
                </div>
                <div>
                    <h1 className="tituloCategorias">
                        Equipo táctico y militar
                    </h1>
                </div>
                <Row xs={1} md={2} className="g-4" style={{marginLeft: "8%",marginTop: "40px",display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px"}} >
                    {categoria1.map((_, idx) => (
                        <Col key={idx} >
                            <Card className="card">
                                <Card.Img variant="top" src={categoria1[idx].img} className="image" />
                                <Card.Body >
                                    <Card.Title className ="nombre">{categoria1[idx].nombre}</Card.Title>
                                    <Card.Text className ="descripcion">{categoria1[idx].descripcion}</Card.Text>
                                    <Card.Title className ="precio"> $ {categoria1[idx].precio}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div>
                    <h1 className="tituloCategorias">
                        Equipamiento para airsoft
                    </h1>
                </div>
                <Row xs={1} md={2} className="g-4" style={{marginLeft: "8%",marginTop: "40px",display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px"}} >
                    {categoria3.map((_, idx) => (
                        <Col key={idx} >
                            <Card className="card">
                                <Card.Img variant="top" src={categoria3[idx].img} className="image" />
                                <Card.Body >
                                    <Card.Title className ="nombre">{categoria3[idx].nombre}</Card.Title>
                                    <Card.Text className ="descripcion">{categoria3[idx].descripcion}</Card.Text>
                                    <Card.Title className ="precio"> $ {categoria3[idx].precio}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div>
                    <h1 className="tituloCategorias">
                        Accesorios para actividades al aire libre
                    </h1>
                </div>
                <Row xs={1} md={2} className="g-4" style={{marginLeft: "8%",marginTop: "40px",display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: "10px"}} >
                    {categoria2.map((_, idx) => (
                        <Col key={idx} >
                            <Card className="card">
                                <Card.Img variant="top" src={categoria2[idx].img} className="image" />
                                <Card.Body >
                                    <Card.Title className ="nombre">{categoria2[idx].nombre}</Card.Title>
                                    <Card.Text className ="descripcion">{categoria2[idx].descripcion}</Card.Text>
                                    <Card.Title className ="precio"> $ {categoria2[idx].precio}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                
            </div>
        </div>
    )
}

export default Catalog;