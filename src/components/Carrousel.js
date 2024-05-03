
// Styles
import "./Carrousel.css"

// Images 
import bg from "./images/carrousel_bg4.jpg"

const Carrousel = () => {
    return (
        <div className="carrousel">
            <img src={bg} alt="Img Carrousel" />
        </div>
    )
}

export default Carrousel;