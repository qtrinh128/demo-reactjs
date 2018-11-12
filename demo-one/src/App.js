import React, { Component } from 'react';
import Product from './components/Product';

class App extends Component {
  render() {

    var listProduct = [
      {
          name: 'san pham 1',
          image: 'https://www.freelogodesign.org/Content/img/slide-logo-2.png',
          details: 'chi tiet 1',
          link: 'https://www.freelogodesign.org/Content/img/slide-logo-2.png',
          active: true,
      },
      {
          name: 'san pham 2',
          image: 'http://logofaves.com/wp-content/uploads/2009/12/aa_m.jpg?9cf02b',
          details: 'chi tiet 2',
          link: 'http://logofaves.com/wp-content/uploads/2009/12/aa_m.jpg?9cf02b',
          active: true,
      },
      {
          name: 'san pham 3',
          image: 'https://www.designfreelogoonline.com/wp-content/uploads/2014/12/00546-Square-levels-logo-design-free-logos-online-02.png',
          details: 'chi tiet 3',
          link: 'https://www.designfreelogoonline.com/wp-content/uploads/2014/12/00546-Square-levels-logo-design-free-logos-online-02.png',
          active: true,
      }
    ];

    let element = listProduct.map((e, i) => {
      return(
        <Product
          key = {i}
          details = {e.details}
          link = {e.link}
          image = {e.image}
        >
          {e.name}
        </Product>
      )
  });

    return (
      <div >
        {element}
      </div>
    );
  }
}

export default App;
