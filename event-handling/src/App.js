import React, { Component } from 'react';
import Product from './components/Product';
import Clock from './components/Clock';
import LoginControl from './components/LoginControl';

class App extends Component {
  render() {
    // let nameButton = [
    //   {
    //     name:'button 1',
    //   },
    // ];
    // function clickMe (text){
    //   console.log(text);
    // }
    // let element = nameButton.map((e, index)=>{
    //    let result =  <Product
    //                 key = {index}
    //                 name = {e.name}
    //                 active = {e.active}
    //                 />
    //   return (
    //     result
    //   );
    // });
    return (
      <div className="container">
        <Clock />
        <LoginControl />
      </div>
    );
  }
}

export default App;
