import React from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
import Box from './../components/box';

class BoxCon extends React.Component{
    render(){
        console.log(this.props.stateColor);
        console.log(this.props.loadColor());
        
        return(
            <Box

            >

            </Box>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        stateColor: state.Color
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        loadColor: ()=>{
            dispatch(actions.loadColor());
        }
    }
}

export default connect(mapStateToProps, actions)(BoxCon);