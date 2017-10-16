import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onIncrement}>+</button>
                <a>증가</a>
                <button onClick={this.props.onDecrement}>-</button>
                <a>감소</a>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}

Button = connect(undefined, mapDispatchToProps)(Button);

export default Button;
