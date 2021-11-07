import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
//import {Card,Button,CardImg,CardTitle,CardSubtitle,CardBody,Container,Row,Col} from 'reactstrap';
import Header from "../components/Header"
import menuForm from "../components/menuForm";
import '../styles/Home.css';
import Compra from "../components/Compra"
import {updateOrigen, updateDestino, updatePasajeros, updateFSalida, updateFRegreso} from "../store/actions/store"
import {connect} from 'react-redux'
import Whatsapp from "../components/Whatsapp"
import { render } from '@testing-library/react';

const renderFechaRegreso = (soloIda, fechaRegreso) => {
    if(soloIda === "no"){
        return(
            <label>
                <br />Fecha Regreso: 
                    <input type="text" id={fechaRegreso} onChange={e => updateFRegreso(e.target.value)}/>
            </label>
        );
    }
    else{
        return null;
    }
}

const updateSoloIda = (soloIda, setSoloIda) => {
    if(soloIda === "no"){
        setSoloIda("si");
    }
    else{
        setSoloIda("no")
    }
}

const Home = ({updateOrigen, updateDestino, updatePasajeros, updateFSalida, updateFRegreso}) =>
{
    const [soloIda, setSoloIda] = useState("no")
    const {id_user} = useParams();
    const [origen, setOrigen] = useState('None');
    const [destino, setDestino] = useState('None');
    const [pasajeros, setPasajeros] = useState('None');
    const [fechaSalida, setFechaSalida] = useState('None');
    const [fechaRegreso, setFechaRegreso] = useState('None');

    return (
        <div className='Home'>
            <Header />
            <div>
                <p>
                    <div className="Home-checkbox">Solo Ida <input type="checkbox" id={soloIda} onChange={e => updateSoloIda(soloIda, setSoloIda)}/></div>
                    <form className='Home-info'>
                        <label> Desde: </label> 
                        <input type="text" id={origen} onChange={e => updateOrigen(e.target.value)}/>

                        <label> <br />Hacia: </label>
                        <input type="text" id={destino} onChange={e => updateDestino(e.target.value)}/>
                        <label> <br />Fecha Salida:</label>
                        <input type="text" id={fechaSalida} onChange={e => updateFSalida(e.target.value)}/>
                        {renderFechaRegreso(soloIda, fechaRegreso)}
                        <label> <br />Pasajeros: </label>
                        <input type="text" id={pasajeros} onChange={e => updatePasajeros(e.target.value)}/>    
                        <input type="submit" value="Buscar"/>
                    </form>
                </p>
            </div>
            <Compra />
            <div>
                <Whatsapp />
            </div>
        </div>
    );
}

const mapActionsToProps = {
    updateOrigen,
    updateDestino,
    updatePasajeros,
    updateFSalida,
    updateFRegreso
}

export default connect(null, mapActionsToProps)(Home);