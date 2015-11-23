import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class App extends Component {
    static needs = [
        actions.getGreeting
    ];

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>{this.props.greeting}</h1>
        );
    }
}

export default connect(state => ({greeting: state.greeting}))(App);