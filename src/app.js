'use strict';
import express from 'express';
import morgan from 'morgan';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RoutingContext, match} from 'react-router';
import {Provider} from 'react-redux';
import createLocation from 'history/lib/createLocation';
import routes from './shared/routes';
import api from './api/api-router';
import createStoreWithMiddleware from './middleware/middleware';
import fetchComponentData from './shared/fetchComponentData';
import path from 'path';
import reducers from './reducers/reducers';

const app = express();

app.use(morgan('dev'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'client')));

app.use('/api', api);

app.use((req, res) => {
    let dom = '',
        location = createLocation(req.url),
        store = createStoreWithMiddleware(reducers),
        bootstrap;

    match({routes, location}, (error, redirectLocation, renderProps) => {
        if (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
        else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }
        else if (renderProps) {
            fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
                .then(() => {
                    const view = (
                        <Provider store={store}>
                            <RoutingContext {...renderProps} />
                        </Provider>
                    );

                    dom = renderToString(view);
                    bootstrap = JSON.stringify(store.getState());

                    res.render('index', {dom, bootstrap});
                })
                .catch((error) => {
                    res.status(500).send(error.message);
                })
        }
        else {
            res.status(404).send('Not found');
        }
    });
});

app.listen(3000, () => {
    console.log('listening');
});