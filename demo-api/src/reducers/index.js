import {combineReducers} from 'redux';
import Color from './color-reducer';
const AppReducer = combineReducers({
    Color: Color
})

export default AppReducer;