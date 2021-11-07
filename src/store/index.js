import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const middlewares = [ thunk ];
const composeEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares) // thunk, middleware2, middlware3....
);

const store = createStore(allReducers, composeEnhancers);

export default store;