import {applyMiddleware, createStore} from 'redux';
import promise from './promise';

export default applyMiddleware(
    promise
)(createStore);