import React, { useState, useEffect } from "react";
import "./Catalog.css";
import products from "../dataCatalog.json";

const Catalog = () => {
    const [categories, setCategories] = useState({
        categoria1: [],
        categoria2: [],
        categoria3: [],
        categoria4: [],
        categoria5: [],
    });

    useEffect(() => {
        const initialCategories = {
            categoria1: [],
            categoria2: [],
            categoria3: [],
            categoria4: [],
            categoria5: [],
        };

        products.forEach((product) => {
            initialCategories[`categoria${product.categorias}`].push(product);
        });

        setCategories(initialCategories);
    }, []);

    const renderCategory = (category) => {
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
                    <p className="contenidoAboutUs">
                        Somos VERA TÁCTICO, una empresa dedicada a la venta de artículos al aire libre, equipamiento de airsoft, indumentarias de fuerzas de seguridad y estamos ubicados en Catamarca, San Fernando del Valle de Catamarca. Ventas al por mayor y menor. Contamos con envíos a todo el país. 
                    </p>
                </div>
                <span id="catalog" style={{ marginBottom: "10%" }} />
                <div className="conteiner-titulo">
                    <h1 className="tituloCatalogo">Catálogo</h1>
                </div>
                <div className="conteiner-frase">
                    <h1 className="frase">Búsca lo que necesites y contáctanos para acordar el envío</h1>
                </div>
                <div className="conteinerProducts">
                    <div className="conteinerGroup">
                        <h1 className="tituloCategorias">Equipo táctico y militar</h1>
                        <div className="gridCards">{renderCategory("categoria1")}</div>
                    </div>
                    <div className="conteinerGroup">
                        <h1 className="tituloCategorias">Equipamiento para Airsoft</h1>
                        <div className="gridCards">{renderCategory("categoria3")}</div>
                    </div>
                    <div className="conteinerGroup">
                        <h1 className="tituloCategorias">Accesorios para actividades al aire libre</h1>
                        <div className="gridCards">{renderCategory("categoria2")}</div>
                    </div>
                    <div className="conteinerGroup">
                        <h1 className="tituloCategorias">Uniformes</h1>
                        <div className="gridCards">{renderCategory("categoria4")}</div>
                    </div>
                    <div className="conteinerGroup">
                        <h1 className="tituloCategorias">Cuchillos</h1>
                        <div className="gridCards">{renderCategory("categoria5")}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;