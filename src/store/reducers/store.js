import {SET_ORIGEN, SET_DESTINO, SET_PASAJEROS, SET_FSALIDA, SET_FREGRESO} from "../actions/types"

const INITIAL_STATE = {
    origen: "None",
    destino: "None",
    pasajeros: 0,
    fechaSalida: 0,
    fechaRegreso: 0
}

const storeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case SET_ORIGEN:
            return {
                ...state,
                origen: action.payload.origen
            }
        case SET_DESTINO:
            return {
                ...state,
                destino: action.payload.destino
            }
        case SET_PASAJEROS:
            return {
                ...state,
                pasajeros: action.payload.pasajeros
            }
        case SET_FSALIDA:
            return {
                ...state,
                fechaSalida: action.payload.fechaSalida
            }
        case SET_FREGRESO:
            return {
                ...state,
                fechaRegreso: action.payload.fechaRegreso
            }
        
        default:
            return state;
    }
}

export default storeReducer;