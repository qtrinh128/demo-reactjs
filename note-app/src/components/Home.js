import React, { Component } from 'react';
import List from './../components/List'
class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: ''
        }

        this.clickThem = this.clickThem.bind(this);
    }

    clickThem(){
        this.setState({
            name: this.refs.name.value
        });
    }

    render() {
        return (
            // <React.Fragment>
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Ghi chu" ref="name" />
                    <button className="btn btn-primary" onClick={()=>this.clickThem()}>Them</button>
                </div>
                <List 
                    name = {this.state.name}
                />
            </div>
            // </React.Fragment>
        );
    }
}

export default Home;
