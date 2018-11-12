import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/index';
import BoxCon from './container/box-container';

let store = createStore(Reducer, applyMiddleware(thunk));

class App extends React.Component{
    render(){
        return(
            <BoxCon>

            </BoxCon>
        );
    }
}

ReactDOM.render(
    <Provider
        store={store}
    >
    <App />
    </Provider>,

    document.getElementById('root')
);
registerServiceWorker();
