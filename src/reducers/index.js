import empdata_json from '../data/empdata.json';
import {ADD_NEW_EMP, DEL_EMP} from '../actions';
// import {combineReducers } from 'react-redux';

function empdata(state = empdata_json, action){
    switch(action.type){
        case ADD_NEW_EMP:
            let empdata = [...state,action.payload];
            return empdata;
        case DEL_EMP:
            empdata = [...state];
            // let pos = empdata.indexOf(action.employee);
            let pos = action.index;
            console.log("index before splice", action.index);
            empdata.splice(pos,1);
            console.log("after splice",empdata);
            return empdata;
        default:
            return state;
    }
}

export default empdata;