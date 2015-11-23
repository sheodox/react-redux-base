import Immutable from 'immutable';

const defaultState = Immutable.Map();

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_GREETING':
            return state.set('greeting', action.res);
    }
}