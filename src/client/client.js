import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import createStoreWithMiddleware from '../middleware/middleware';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../shared/routes';

const history = createBrowserHistory();

render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('react')
);