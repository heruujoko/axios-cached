import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from '../services/api';
import reducers from './reducers';

let enhancers = applyMiddleware(axiosMiddleware(api));

if (process.env.ENV !== 'production') {
    enhancers = composeWithDevTools(
        enhancers
    )
}

let store = createStore(reducers, enhancers);
export default store;