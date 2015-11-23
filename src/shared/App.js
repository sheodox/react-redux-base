import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

@connect (state => ({greeting: state.greeting}))
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

export default App;