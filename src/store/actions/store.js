import {SET_ORIGEN, SET_DESTINO, SET_PASAJEROS, SET_FSALIDA, SET_FREGRESO} from "./types"

export const updateOrigen = (newOrigen) => (dispatch) => {
    dispatch({
        type: SET_ORIGEN,
        payload: {origen: newOrigen}
    });
}

export const updateDestino = (newDestino) => (dispatch) => {
    dispatch({
        type: SET_DESTINO,
        payload: {destino: newDestino}
    });
}

export const updatePasajeros = (newPasajeros) => (dispatch) => {
    dispatch({
        type: SET_PASAJEROS,
        payload: {pasajeros: newPasajeros}
    });
}

export const updateFSalida = (newFSalida) => (dispatch) => {
    dispatch({
        type: SET_FSALIDA,
        payload: {fechaSalida: newFSalida}
    });
}

export const updateFRegreso = (newFRegreso) => (dispatch) => {
    dispatch({
        type: SET_FREGRESO,
        payload: {fechaRegreso: newFRegreso}
    });
}