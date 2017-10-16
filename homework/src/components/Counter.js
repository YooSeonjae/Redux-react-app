import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Speed 증가/감소하기</h1>
                <h3>Speed : {this.props.value}</h3>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    }
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;
