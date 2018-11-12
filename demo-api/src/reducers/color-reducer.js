import * as types from './../constants/action-type';
let defaultState = {
    color: 'red'
}
const ColorReducer = (state = defaultState, aciton)=>{
    switch(aciton.type){
        case types.CHANGE_COLOR:
                            
            return state;
        default:
            return state
    }
}
export default ColorReducer;