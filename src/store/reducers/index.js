import { combineReducers } from 'redux';
import storeReducer from './store'

const allReducers = combineReducers({
    storeReducer
});

export default allReducers;