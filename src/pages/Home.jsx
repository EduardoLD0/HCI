import {Link} from 'react-router-dom';
import {Card,Button,CardImg,CardTitle,CardSubtitle,CardBody,Container,Row,Col} from 'reactstrap';
import menuForm from "../components/menuForm";
import '../styles/Home.css';

const Home = () =>
{
    return (
        <div className='Home'>
            <ul className='Home-header'>
            <li><Link to='/checkin' className='Home-link'>Web Check-in</Link></li>
            <li>Comprar Boletos Aéreos    </li>
            <li>Mis Reservaciones    </li>
            <li>A dónde volamos    </li>
            <li className='Home-logo'></li>
            </ul>
            
            <div>
                <p>
                    <form className='Home-info'>
                        <label>
                            Desde: 
                            <input type="text" name="Desde" />
                        </label>
                        <label>
                            Hacia: 
                            <input type="text" name="Hacia" />
                        </label>
                        <label>
                            Fecha Salida: 
                            <input type="text" name="Fecha Salida" />
                        </label>
                        <label>
                            Fecha Regreso: 
                            <input type="text" name="Fecha Regreso" />
                        </label>
                        <label>
                            Pasajeros: 
                            <input type="text" name="Pasajeros" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </p>
            </div>

        <p className='Home-places'></p>
        </div>
    );
}

export default Home;