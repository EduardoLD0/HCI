import {Link} from 'react-router-dom';

const Checkin = () =>
{
    return (
        <div>
            <div>
                Haga aqui su Checkin
                <Link to='/'>Volver</Link>
            </div>
            <div>
                <p>
                    <form>
                        <label>
                            Numero:
                            <input type="text" name="Numero" />
                        </label>
                        <label>
                            Apellido:
                            <input type="text" name="Apellido" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </p>
            </div>
        </div>
        
    )
}

export default Checkin;