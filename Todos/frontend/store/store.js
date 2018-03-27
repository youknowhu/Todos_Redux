import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers/rootReducer';

const configureStore = () => createStore(reducer, applyMiddleware(logger));


export default configureStore;
