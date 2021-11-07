import {connect} from 'react-redux'
import "../styles/Compra.css"

const Compra = ({origen, destino, pasajeros, fechaSalida, fechaRegreso}) => {
    return (
        <div className="Items">Su tiquete:
            <ul>
                <li>Origen: {origen}</li>
                <li>Destino: {destino}</li>
                <li>N° Pasajeros: {pasajeros}</li>
                <li>fecha de salida: {fechaSalida}</li>
                <li>fecha de regreso: {fechaRegreso}</li>
            </ul>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        origen: state.storeReducer.origen,
        destino: state.storeReducer.destino,
        pasajeros: state.storeReducer.pasajeros,
        fechaSalida: state.storeReducer.fechaSalida,
        fechaRegreso: state.storeReducer.fechaRegreso
    };
}

export default connect(mapStateToProps)(Compra);