import React from 'react';

class Form extends React.Component{
    clickButton = ()=>{
        let text = this.refs.input.value;
        console.log(text);
    }
    render(){
        return(
            <div>
                <input type="text" ref="input" />
                <br />
                <button type="button" onClick={this.clickButton} >Click</button>
            </div>
        );
    }
}

export default Form;