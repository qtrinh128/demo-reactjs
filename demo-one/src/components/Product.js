import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
        <div className="container">
            <div className="card">
                <img className="card-img-top" src={this.props.image} alt={this.props.name} />
                <div className="card-body">
                    <h4 className="card-title">{this.props.children}</h4>
                    <p className="card-text">{this.props.details}</p>
                    <a className="btn btn-primary">Xem chi tiet</a>
                </div>
            </div>
        </div>
    );
  }
}

export default Product;
