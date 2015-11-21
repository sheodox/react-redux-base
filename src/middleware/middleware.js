import {applyMiddleware} from 'redux';
import promise from './promise';

export default applyMiddleware(
    promise
)(createStore);