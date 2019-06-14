import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from '../reducer/index';

const store = createStore(reducer);

class AddComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalNum: 0
        }
    }
    add() {
        store.dispatch({ type: 'increase' })
    }
    del() {
        store.dispatch({ type: 'decrease' })
    }
    componentWillMount() {
        const _this = this;
        store.subscribe(function () {
            _this.setState({
                totalNum: store.getState().count
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.add}>+</button>
                <br />
                totalNum{this.state.totalNum}
                <br />
                <button onClick={this.del}>-</button>
            </div>
        )
    }
}

export default AddComponent;