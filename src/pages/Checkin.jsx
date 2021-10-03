import {Link} from 'react-router-dom';
import '../styles/Checkin.css';

const Checkin = () =>
{
    return (
        <div>
            <div>
                Realizar Web-CheckIn
            </div>
            <div>
                <p>
                    <form className='Checkin-info'>
                        <label>
                            Código de reserva:
                            <input type="text" name="Numero" />
                        </label>
                        <label>
                            Apellido:
                            <input type="text" name="Apellido" />
                        </label>
                        <input type="submit" value="Enviar" />
                    </form>
                </p>
            </div>

            <Link to='/'>Volver</Link>
        </div>
        
    )
}

export default Checkin;