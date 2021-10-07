import {Link} from 'react-router-dom';
import {Card,Button,CardImg,CardTitle,CardSubtitle,CardBody,Container,Row,Col} from 'reactstrap';
import Header from "../components/Header"
import menuForm from "../components/menuForm";
import '../styles/Home.css';

const Home = () =>
{
    return (
        <div className='Home'>
            <Header />
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
                        <input type="buscar" value="Buscar" />
                    </form>
                </p>
            </div>
        </div>
    );
}

export default Home;