import React from 'react';

class Edit extends React.Component {
    getTextInInput = () => {
        let index = this.props.index;
        let text = this.refs.note.value.trim();
        if(text === ""){
            alert('Điền gì đó đi chứ!!!');
        }else{
            this.props.getUpdate(index, text);
        }
    }
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="form-group">
                        <label>Update:</label>
                        <input type="text" className="form-control" ref="note" defaultValue={this.props.text} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.getTextInInput}>Update</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Edit;