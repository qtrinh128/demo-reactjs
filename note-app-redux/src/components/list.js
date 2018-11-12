import React from 'react';
import Button from './button';
import Edit from './edit';
import Delete from './delete';
import Styled from 'styled-components';

const UlTag = Styled.ul`
    text-decoration: line-through;
`;

class List extends React.Component {

    getIndex = (index) => {
        this.props.getIndex(index);
    }
    getUpdate = (index, text) => {
        this.props.updateNote(index, text);
    }
    setStatus = () => {
        let status = !this.props.note.status;
        let index = this.props.index;
        this.props.getStatus(status, index);
    }
    getActive = (index, active) => {
        this.props.getActive(index, active);
    }
    showButton = (status, active) => {
        if (status && !active) {
            return (
                <React.Fragment>
                    <Button
                        index={this.props.index}
                        text={this.props.note.text}
                        getIndex={this.getIndex}
                        getActive={this.getActive}
                    >
                    </Button>
                    <Edit
                        index={this.props.index}
                        text={this.props.note.text}
                        getUpdate={this.getUpdate}
                    >

                    </Edit>
                </React.Fragment>

            );
        } else  if(status){
            return (
                <React.Fragment>
                    <Delete
                        index={this.props.index}
                        getIndex={this.getIndex}
                    >

                    </Delete>
                </React.Fragment>
            );
        }else{
            return "";
        }
    }
    showNote = (active) => {
        if(active){
            return(
                <React.Fragment>
                    <UlTag className="list-group list-group-flush col-sm-10">
                        <li className="list-group-item" onClick={this.setStatus}>{this.props.note.text}</li>
                    </UlTag>
                </React.Fragment>
            );
        }else{
            return(
                <React.Fragment>
                    <ul className="list-group list-group-flush col-sm-10">
                        <li className="list-group-item" onClick={this.setStatus}>{this.props.note.text}</li>
                    </ul>
                </React.Fragment>
            );
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container row">
                    {this.showNote(this.props.note.active)}
                    {this.showButton(this.props.note.status, this.props.note.active)}
                </div>
            </React.Fragment>
        );
    }
}

export default List;