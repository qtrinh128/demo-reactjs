import { TYPE } from './../constants/action-type';

export const getNote = (note) => {
    return {
        type: TYPE.ADD_NOTE,
        note
    }
}
export const getIndexNote = (index) => {
    return {
        type: TYPE.GET_INDEX_NOTE,
        index
    }
}
export const getStatusNote = (status, index) => {
    return {
        type: TYPE.GET_STATUS_NOTE,
        status,
        index
    }
}
export const updateNote = (index, text) => { 
    return {
        type: TYPE.UPDATE_NOTE,
        index,
        text
    }
}
export const getActive = (index, active) => {
    return {
        type: TYPE.ACTIVE,
        index,
        active
    }
}