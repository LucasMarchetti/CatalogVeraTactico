import React, { useState, useEffect } from "react";
import "./Catalog.css";
import products from "../dataCatalog.json";

const Catalog = () => {
    const [categories, setCategories] = useState({
        categoria1: [],
        categoria2: [],
        categoria3: [],
    });

    useEffect(() => {
        const initialCategories = {
            categoria1: [],
            categoria2: [],
            categoria3: [],
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
                    <div className="contenidoAboutUs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                </div>
            </div>
        </div>
    );
};

export default Catalog;