import React, { Component } from 'react';
class Product extends Component {
    constructor(props){
        super(props);
        this.clickMeInProduct = this.clickMeInProduct.bind(this);
        this.clickAddButton = this.clickAddButton.bind(this);
    }
    clickMeInProduct(){
        alert(this.props.active);
    }
    clickAddButton(){
        alert(this.refs.name.value);
    }
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label>
                        Nhap
                    </label>
                    <input type="text" className="form-control" ref="name"/>
                    <button className="btn btn-primary"onClick = {this.clickAddButton}>Add</button>
                </div>
                <p className="btn btn-primary" onClick = {this.clickMeInProduct}>
                    {this.props.name}
                </p>
            </div>
        );
    }
}

export default Product;
