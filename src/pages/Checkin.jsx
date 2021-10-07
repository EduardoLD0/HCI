import {Link} from 'react-router-dom';
import '../styles/Checkin.css';
import Header from '../components/Header'

const Checkin = () =>
{
    return (
        <div className='Home'>
            <Header />
            <div>
                Realizar Web-CheckIn
            </div>
            <div>
                <p>
                    <form className='Checkin-info'>
                        <label>
                            Código de reserva:
                            <input type="text" name="Código" />
                        </label>
                        <label>
                            Apellido:
                            <input type="text" name="Apellido" />
                        </label>
                        <input type="submit" value="Enviar" />
                    </form>
                </p>
            </div>

            <Link to='/'>Volver a Home</Link>
        </div>
        
    )
}

export default Checkin;