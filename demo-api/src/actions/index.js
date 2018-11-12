import Axios from 'axios';
import * as types from './../constants/action-type';

// export const actFetchItemCustomerRequest = () => {
//     return (dispatch) => {
//         return callApi('restaurant', 'GET', null).then(res =>{
            
//             dispatch(actFetchItemCustomer(res.data));
//         });
//     }
// }

// export const actFetchItemCustomer = (itemcustoms) => {
//     return {
//         type : Types.FETCH_ITEMCUSTOMER,
//         itemcustoms
//     }
// }
export const getDataFromAPI = ()=>{
    return (dispatch)=>{
        return loadColor().then(res => {
            dispatch(changeColor(res));
        })
    }
}

export const changeColor = (color) => {
    return {
        type: types.CHANGE_COLOR,
        color: color
    }
}

export const loadColor = () => {
    Axios.get('http://www.colr.org/json/color/random')
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}