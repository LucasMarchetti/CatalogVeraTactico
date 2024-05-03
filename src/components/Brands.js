
// Styles
import "./Brands.css"

// Images
import camel from "./images/camelbak-logo.png"
import cater from "./images/Caterpillar-Logo.png"
import boer from "./images/logo_boer.png"
import stan from "./images/stanley_logo.png"

const Brands = () => {
    return (
        <div>
            <div className="border" id="inicio" />
            <div className="marcas" >
                <a href="https://www.camelbak.com/">
                    <img src={camel} alt="Img" style={{height: "120px"}}/>
                </a>
                <a href="https://www.caterpillar.com/en.html">
                    <img src={cater} alt="Img" style={{height: "120px"}}/>
                </a>
                <a href="https://boer.ar/">
                    <img src={boer} alt="Img" style={{height: "150px"}}/>
                </a>
                <a href="https://www.stanley1913.ar/">
                    <img src={stan} alt="Img" style={{height: "120px"}}/>
                </a>
            </div>
        </div>
    )
}

export default Brands;