import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './Reducers/rootReducer';

const middlewares = [thunk];   // To use more middlewares just import the middleware and add in this array seperated by comma
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))
export const store = createStore(
    rootReducer,
    composedEnhancers
    )
export default store 