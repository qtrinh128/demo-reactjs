import React from 'react';
import Styled from 'styled-components';

const DeleteButton = Styled.button`
            color: white
            border: solid;
            border-radius: 5px;
            margin: 10px;
            padding: 5px;
            border-color: white;
            background-color: red;
        `;
class Delete extends React.Component {
    getIndex = () => {
        let index = this.props.index;
        this.props.getIndex(index);
    }
    render(){
        return (
            <React.Fragment>
                    <DeleteButton
                        type="button" onClick={this.getIndex}
                    >
                    Delete 
                    </DeleteButton>
            </React.Fragment>
        );
    }
}

export default Delete;