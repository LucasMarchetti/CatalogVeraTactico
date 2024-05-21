
// Styles 
import "./Catalog.css"

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
        } return current
    })

    return (
        <div className="container">
            <div className="catalog">
            <span id="about" style={{marginBottom:"10%"}}/>
                <div className="conteinerAboutUs">
                    <h1 className="titleAboutUs">
                        Acerca de Nosotros
                    </h1>
                    <div className="contenidoAboutUs" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            <span id="catalog" style={{marginBottom:"10%"}}/>
                <div className="conteiner-titulo" >
                    <h1 className="tituloCatalogo"  >
                        Catálogo
                    </h1>
                </div>
                <div className="conteiner-frase" >
                    <h1 className="frase" >
                        Búsca lo que necesites y contáctanos para acordar el envío
                    </h1>
                </div>
                <div className="conteinerProducts">
                    <div>
                        <h1 className="tituloCategorias1">
                            Equipo táctico y militar
                        </h1>
                        <div className="gridCards">
                            {   
                                categoria1?.map((_, idx) => (
                                    <div key={idx} className="bodyCard" >
                                        <img src={categoria1[idx].img} alt="image" className="imageCard" />
                                        <div className="infoCard">
                                            <h1>{categoria1[idx].nombre}</h1>
                                            <p className="title">{categoria1[idx].descripcion}</p>
                                            <p className="price"> $ {categoria1[idx].precio}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className="tituloCategorias2" >
                            Equipamiento para airsoft
                        </h1>
                        <div className="gridCards">
                            {
                                categoria3?.map((_, idx) => (
                                    <div key={idx} className="bodyCard" >
                                        <img src={categoria3[idx].img} alt="image" className="imageCard" />
                                        <div className="infoCard">
                                            <h1>{categoria3[idx].nombre}</h1>
                                            <p className="title">{categoria3[idx].descripcion}</p>
                                            <p className="price"> $ {categoria3[idx].precio}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h1 className="tituloCategorias3">
                            Accesorios para actividades al aire libre
                        </h1>
                        <div className="gridCards">
                            {
                                categoria2?.map((_, idx) => (
                                    <div key={idx} className="bodyCard" >
                                        <img src={categoria2[idx].img} alt="image" className="imageCard" />
                                        <div className="infoCard">
                                            <h1>{categoria2[idx].nombre}</h1>
                                            <p className="title">{categoria2[idx].descripcion}</p>
                                            <p className="price"> $ {categoria2[idx].precio}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;