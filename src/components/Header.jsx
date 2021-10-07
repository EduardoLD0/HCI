import {Link} from 'react-router-dom';
import "../styles/Header.css"

const Header = () => {
    return(
        <ul className='Header'>
        <Link to='/'><li className='Header-logo'></li></Link>
        <li><Link to='/checkin' className='Home-link'>Web Check-in</Link></li>
        <li>Comprar Boletos Aéreos</li>
        <li>Mis Reservaciones</li>
        <li>A dónde volamos</li>
        </ul>
    )
}

export default Header