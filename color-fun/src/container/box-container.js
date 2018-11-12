import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import Box from './../components/box';

class BoxCon extends React.Component{
    render(){
        console.log(this.props.color);
        
        return (
            <Box
                handClick = {this.props.loadColor}
                color = {this.props.color}
            >

            </Box>
        );
    }
}


const mapStateToProps =(state)=>{
    return state;
}
export default connect(mapStateToProps, actions)(BoxCon);