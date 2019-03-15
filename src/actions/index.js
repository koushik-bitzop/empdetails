//Action type
export const ADD_NEW_EMP = "ADD_NEW_EMP";
export const DEL_EMP = 'DEL_EMP'

//Action creator, should return a plain object
export function addNewEmp(payload){
    const action = {
        type: ADD_NEW_EMP,
        payload
    }
    return action;
} 

export function delEmp(index){
    const action = {
        type: DEL_EMP,
        index
    }
    return action;
}
