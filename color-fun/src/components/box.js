import React from 'react';

class Box extends React.Component{
    render(){
        return(
            <div className="wraper">
                <div 
                style={
                    {
                        backgroundColor: `${this.props.color}`
                    }
                }
                className="box">
                    <button 
                    onClick={()=>{this.props.handClick()}}
                    >
                        Change Color
                    </button>
                </div>
            </div>

        );
    }
}

export default Box;