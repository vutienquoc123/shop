import { CHANGE_ADDRESS } from "../Actions/actionTypes";

let initialState={
    address:{},
}
const AddressReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CHANGE_ADDRESS:
            {
                state.address = action.payload
                // console.log('change add : ',state.address)
            }
            return {...state}
        default:
            return state;
    }
}
export default AddressReducer;