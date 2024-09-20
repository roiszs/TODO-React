import { FaCheckCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import './TodoIcon.css'

const iconTypes = {
    "check": (color) => <FaCheckCircle className="Icon-svg" fill={color}/>,
    "delete": (color) => <TiDelete className="Icon-svg" fill={color}/>,
};

function TodoIcon ({type, color, onClick}) {
    return (
        <span className={`Icon-container Icon-container-${type}`}
        onClick={onClick}>
            
          {iconTypes[type](color)}

        </span>
    )
}

export {TodoIcon };