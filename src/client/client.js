import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {fromJS} from 'immutable';
import createStoreWithMiddleware from '../middleware/middleware';
import reducers from '../reducers/reducers';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../shared/routes';
import immutify from './immutify';

const history = createBrowserHistory();

const initialState = immutify(__INITIAL__);

const store = createStoreWithMiddleware(reducers, initialState);

render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('react')
);