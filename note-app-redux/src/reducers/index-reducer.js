import { combineReducers } from 'redux';
import Note from './state-note';

const AppReducer = combineReducers({
    Note: Note,
});

export default AppReducer;