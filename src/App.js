import React, { Component } from 'react'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        console.log(this.props.app)
        return (
            <button onClick={this.props.action}>asd</button>
        )
    };
};

const mapState = (state) => {
console.log(state)
    return {
    app: state.app
}}

const action = () => ({
    type: 'APP',
    payload: '123'
});

const mapDispatch = {
    action,
};

export default connect(mapState, mapDispatch)(App);