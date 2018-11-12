let defaultState = {
    color: 'red'
}
const reducer = (state = defaultState, action)=>{
    switch(action.type){
        case 'CHANGE_COLOR':
            state.color = action.color
            console.log(state.color);
            return state
                            
        default:
            return state
    }
    // if(action.type === 'CHANGE_COLOR'){
    //     console.log(action.color);
        
    //     return {
    //         ...state,
    //         color: action.color
    //     }
    // }else{
    //     return {
    //         ...state
    //     }
    // }
}

export default reducer;