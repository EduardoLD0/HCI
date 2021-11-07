import {Link} from 'react-router-dom';
import "../styles/Whatsapp.css"

const Whatsapp = () => {
    return(
        <div>
            <a
            href="https://wa.me/3002518208"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
            >
            <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
      </div>
    )
}

export default Whatsapp