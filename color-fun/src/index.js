import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/index';
import './index.css';
import BoxCon from './container/box-container';

let store = createStore(Reducer, applyMiddleware(thunk));

class App extends React.Component{
    render(){
        return (
            <div>
                <BoxCon />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
