import { CHANGE_TIME } from "../Actions/actionTypes";

let initialState={
    time:{},
}
const TimeReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CHANGE_TIME:
            {
                state.time = action.payload
                console.log('change cate : ',state.time)
            }
            return {...state}
        default:
            return state;
    }
}
export default TimeReducer;