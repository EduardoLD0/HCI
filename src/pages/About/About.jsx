
import {Link} from 'react-router-dom';
import '../../styles/About.css';
import Header from '../../components/Header';


const About = () => {
    return (
        <div>
            <Header />
                <p>
                PUJ  Airlines, Inc. (PPJ), conocida simplemente como PUJ, es una 
                aerolínea Colombiana con sede en Cali, Valle que inicio operaciones 
                en 2018. Opera vuelos programados en una extensa red rutas nacionales 
                e internacionales en América del Norte, el Caribe, América del Sur, 
                Europa y Asia. Su red de rutas gira en torno a sus nueve centros de 
                operaciones en Cali, Bogotá, Medellin, Cartagena, Santa Marta, Pereira, 
                Armenia, Rionegro y Barranquilla. Su base principal de mantenimiento 
                se encuentra en Bogotá.
                </p>
                <p className='Flota'></p>
                <p><Link to='/about/flota'>Nuestra Flota</Link></p>
                <p><Link to='/about/destinos'>A dónde volamos</Link></p>
        </div>
    );
}

export default About;