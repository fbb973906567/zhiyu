import React,{Component} from 'react';
import {createStore} from 'redux';
import reducer from '../reducer/index';

const store = createStore(reducer);

class AddComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            totalNum:0
        }
    }
    add(){
        store.dispatch({ type: 'increase' })
    }
    del(){
        store.dispatch({type:'decrease'})
    }

    render(){
        return(
            <div>
                <button onClick={this.add}>+</button>
                <br/>
                totalNum{store.getState().count}
                <br/>
                <button onClick={this.del}>-</button>
            </div>
        )
    }
}

export default AddComponent;