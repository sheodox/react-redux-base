import {combineReducers} from 'redux';

import greetingReducer from './greetingReducer';

export default combineReducers({
    greeting: greetingReducer
});