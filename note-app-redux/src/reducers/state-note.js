import { TYPE } from './../constants/action-type';
let initialState = [];


const StateNote = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADD_NOTE:
            state.push(action.note);
            return [...state];

        case TYPE.GET_STATUS_NOTE:
            state[action.index].status = action.status;
            return [...state];

        case TYPE.GET_INDEX_NOTE:
            state.splice(action.index, 1)
            return [...state];

        case TYPE.UPDATE_NOTE:
            state[action.index].text = action.text;
            state[action.index].status = !state[action.index].status;
            return [...state];

        case TYPE.ACTIVE:
            state[action.index].active = action.active;
            return [...state];

        default:
            return state;
    }
}

export default StateNote;
