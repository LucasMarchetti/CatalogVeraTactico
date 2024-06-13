import React, { useState, useEffect } from "react";
import "./Catalog.css";
import products from "../dataCatalog.json";

const Catalog = () => {
    const [categories, setCategories] = useState({
        categoria1: [],
        categoria2: [],
        categoria3: [],
        categoria4: [],
    });

    useEffect(() => {
        const initialCategories = {
            categoria1: [],
            categoria2: [],
            categoria3: [],
            categoria4: [],
        };

        products.forEach((product) => {
            initialCategories[`categoria${product.categorias}`].push(product);
        });

        setCategories(initialCategories);
    }, []);

    const renderCategory = (category) => {
        console.log(categories[category], "categories[category]")
        console.log(categories, "categories[category]")

        return categories[category].map((product) => (
            <div key={product.id} className="bodyCard">
                <img src={require(`${product.img}`)} alt={product.nombre} className="imageCard" />
                <div className="infoCard">
                    <h1>{product.nombre}</h1>
                    <p className="title">{product.descripcion}</p>
                    <p className="price">$ {product.precio}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className="container">
            <div className="catalog">
                <span id="about" style={{ marginBottom: "10%" }} />
                <div className="conteinerAboutUs">
                    <h1 className="titleAboutUs">Acerca de Nosotros</h1>
                    <div className="contenidoAboutUs">
                        Somos VERA TÁCTICO, una empresa dedicada a la venta de artículos al aire libre, equipamiento de airsoft, indumentarias de fuerzas de seguridad y estamos ubicados en Catamarca, San Fernando del Valle de Catamarca. Ventas al por mayor y menor. Contamos con envíos a todo el país. 
                    </div>
                </div>
                <span id="catalog" style={{ marginBottom: "10%" }} />
                <div className="conteiner-titulo">
                    <h1 className="tituloCatalogo">Catálogo</h1>
                </div>
                <div className="conteiner-frase">
                    <h1 className="frase">Búsca lo que necesites y contáctanos para acordar el envío</h1>
                </div>
                <div className="conteinerProducts">
                    <div>
                        <h1 className="tituloCategorias1">Equipo táctico y militar</h1>
                        <div className="gridCards">{renderCategory("categoria1")}</div>
                    </div>
                    <div>
                        <h1 className="tituloCategorias2">Equipamiento para Airsoft</h1>
                        <div className="gridCards">{renderCategory("categoria3")}</div>
                    </div>
                    <div>
                        <h1 className="tituloCategorias3">Accesorios para actividades al aire libre</h1>
                        <div className="gridCards">{renderCategory("categoria2")}</div>
                    </div>
                    <div>
                        <h1 className="tituloCategorias3">Uniformes</h1>
                        <div className="gridCards">{renderCategory("categoria4")}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;