import { GET_USER } from "../actions/actionTypes";
import {DELETE_USER} from "../actions/actionTypes";
let initialState={
    user:null,
}
const UserReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_USER:
            {
                state.user = action.payload
                console.log('user : ',state.user)
            }
            return {...state}
            case DELETE_USER:
                {
                    state.user = null
                    // console.log('user : ',state.user)
                }
                return {...state}    
        default:
            return state;
    }
}


export default UserReducer;