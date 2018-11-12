import React from 'react';
import {connect} from 'react-redux';
import * as Action from './../actions/action-note';
import Form from './../components/form';

class AppContainer extends React.Component {
    getNote = (note) => {
        this.props.actionGetNote(note);
    }
    getIndexNote = (index) => {
        this.props.actionGetIndexNote(index);
    }
    setStatus = (status, index) => {
        this.props.setStatusNote(status, index);
    }
    updateNote = (index, text) =>{
        this.props.updateNote(index, text)
    }
    getActive = (index, active) =>{
        this.props.getActive(index, active);
    }
    render() {
        return(
            <React.Fragment>
                <Form
                    getNote = {this.getNote}
                    ListNote = {this.props.Note}
                    getIndexNote = {this.getIndexNote}
                    status = {this.props.Status}
                    setStatus = {this.setStatus}
                    updateNote={this.updateNote}
                    getActive={this.getActive}
                >
                    
                </Form>
            </React.Fragment>
        );
    }
}
const mapStateToProps  = (state) => {
    return {
        Note: state.Note,
    }
}
const mapDispatchToProps  = (dispatch) => {
    return {
        actionGetNote: (note) => {
            dispatch(Action.getNote(note));
        },
        actionGetIndexNote: (index) => {
            dispatch(Action.getIndexNote(index));
        },
        setStatusNote : (status, index) => {
            dispatch(Action.getStatusNote(status, index));
        },
        updateNote: (index, text) => {
            dispatch(Action.updateNote(index, text));
        },
        getActive: (index, active) => {
            dispatch(Action.getActive(index, active));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);