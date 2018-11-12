import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import AppContainer from './containers/app';
import AppReducer from './reducers/index-reducer';


let store = createStore(AppReducer, applyMiddleware(thunk));
class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div>
                    <AppContainer>
                        
                    </AppContainer>
                </div>
            </React.Fragment>
        );
    }
}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
