import {Map} from 'immutable';

const defaultState = Map();

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_GREETING':
            return state.set('phrase', action.res.data);
        default:
            return state;
    }
}