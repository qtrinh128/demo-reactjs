import React from 'react';
import Styled from 'styled-components';

class Button extends React.Component {
    getIndex = () => {
        let index = this.props.index;
        this.props.getIndex(index);
    }
    setActive = () => {
        let index = this.props.index;
        let active = true;
        this.props.getActive(index, active);
    }
    render(){
        const DeleteButton = Styled.input`
            color: white
            border: solid;
            border-radius: 5px;
            margin: 10px;
            padding: 5px;
            border-color: white;
            background-color: red;
        `;
        const DoneButton = Styled.input`
            color: white
            border: solid;
            border-radius: 5px;
            margin: 10px;
            padding: 5px;
            border-color: white;
            background-color: blue;
        `;

        return(
            <React.Fragment>
                <DeleteButton
                    type="button" value="Delete" onClick={this.getIndex}
                />
                <DoneButton 
                    type="button" value="Done" onClick={this.setActive}
                />
            </React.Fragment>
        );
    }
}

export default Button;