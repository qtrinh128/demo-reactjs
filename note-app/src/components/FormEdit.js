import React, { Component } from 'react';

class Edit extends Component {

    constructor(props){
        super(props);
        this.clickOk = this.clickOk.bind(this);
    }

    clickOk(){
        this.props.getName(this.refs.name.value);
    }

    render() {

        return (
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" defaultValue={this.props.obj.element} ref="name" />
                    <button className="btn btn-primary" onClick={()=>this.clickOk()}>Ok</button>
                </div>
            </div>
        );
    }
}

export default Edit;
