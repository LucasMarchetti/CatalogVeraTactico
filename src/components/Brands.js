
// Styles
import "./Brands.css"

// Images
import camel from "./images/camelbak-logo.png"
import cater from "./images/Caterpillar-Logo.png"
import boer from "./images/logo_boer.png"
import stan from "./images/stanley_logo.png"
import col from "./images/logo-columbia.png"

const Brands = () => {
    return (
        <div>
            <div className="border" id="inicio"/>
            <div className="conteiner">
                <div className="items item-1" >
                    <a href="https://www.camelbak.com/" target="_blank" rel="noreferrer noopener">
                        <img src={camel} alt="Img" className="camel"/>
                    </a>
                </div>
                <div className="items item-3" >
                    <a href="https://boer.ar/" target="_blank" rel="noreferrer noopener">
                        <img src={boer} alt="Img" className="boer"/>
                    </a>
                </div>
                <div className="items item-2" >
                    <a href="https://www.caterpillar.com/en.html" target="_blank" rel="noreferrer noopener">
                        <img src={cater} alt="Img" className="cater"/>
                    </a>
                </div>
                <div className="items item-4" >
                    <a href="https://www.stanley1913.ar/" target="_blank" rel="noreferrer noopener">
                        <img src={stan} alt="Img" className="stan"/>
                    </a>
                </div>
                <div className="items item-2" >
                    <a href="https://www.columbia.com/" target="_blank" rel="noreferrer noopener">
                        <img src={col} alt="Img" className="cater"/>
                    </a>    
                </div>
            </div>
        </div>
    )
}

export default Brands;