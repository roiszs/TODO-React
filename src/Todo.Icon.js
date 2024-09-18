import { FaCheckCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const iconTypes = {
    'check': <FaCheckCircle />,
    'delete':  <TiDelete />,
}

function TodoIcon (type) {
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            
          {iconTypes[type]}

        </span>
    )
}

export {TodoIcon };