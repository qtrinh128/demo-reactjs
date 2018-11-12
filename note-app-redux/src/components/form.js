import React from 'react';
import List from './list';

class Form extends React.Component {
    getTextInInput = () => {
        let text = this.refs.note.value.trim();
        let status = false;
        let active = false;
        let note = {
            text: text,
            status: status,
            active: active
        }
        if (text === "") {
            alert('Điền gì đó đi chứ?', typeof text);
        } else {
            this.props.getNote(note);
            this.refs.note.value = "";
        }
    }
    getIndex = (index) => {
        this.props.getIndexNote(index);
    }

    getStatus = (status, index) => {
        this.props.setStatus(status, index);
    }

    updateNote = (index, text) => {
        this.props.updateNote(index, text);
    }
    getActive = (index, active) => {
        this.props.getActive(index, active);
    }
    render() {
        let element = this.props.ListNote.map((e, i) => {
            return (
                <React.Fragment
                    key={i}
                >
                    <List
                        note={e}
                        index={i}
                        getIndex={this.getIndex}
                        status={this.props.status}
                        getStatus={this.getStatus}
                        updateNote={this.updateNote}
                        getActive={this.getActive}
                    >

                    </List>
                </React.Fragment>
            );
        });
        
        return (

            <React.Fragment>
                <div className="container">
                    <div className="form-group">
                        <label>Note:</label>
                        <input type="text" className="form-control" ref="note" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.getTextInInput}>Add</button>
                    {element}
                </div>
            </React.Fragment>
        );
    }
}

export default Form;