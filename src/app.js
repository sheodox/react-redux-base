'use strict';
import express from 'express';
import morgan from 'morgan';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {createStore, combineReducers} from 'redux';
import {RoutingContext, match} from 'react-router';
import routes from './shared/routes';
import path from 'path';

const app = express();

app.use(morgan('dev'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'client')));

//mount APIs here

app.use((req, res) => {
    let dom = '',
        bootstrap = '"something"';

    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
        else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }
        else if (renderProps) {
            dom = renderToString(<RoutingContext {...renderProps} />);
            res.render('index', {dom, bootstrap});
        }
        else {
            res.status(404).send('Not found');
        }
    });
});

app.listen(3000, () => {
    console.log('listening');
});