import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import HomeContainer from './containers/HomeContainer';

class App extends React.Component{
    render(){
        return(
            <div>
                <HomeContainer>

                </HomeContainer>
            </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
