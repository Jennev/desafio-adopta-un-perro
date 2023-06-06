//import { propTypes } from "prop-types";

import Tags from "./Tags";

const Card = ({ nombre, texto, foto, color, raza }) => {
    return (
        <div className="card d-flex flex-colum">
            <img src={foto} alt={nombre} className="card-foto" />
            <div className="card-body">
                <h5 className="card-nombre">{nombre}</h5>
                <p className="card-texto">{texto}</p>
                <div>
                    <Tags text={raza} color={color} />
                </div>
            </div>

        </div>
    )
}


export default Card