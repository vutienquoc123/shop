import { CHANGE_CONTACT } from "../Actions/actionTypes";

let initialState={
   contact:{},
}
const ContactReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CHANGE_CONTACT:
            {
                state.contact = action.payload
                // console.log('change cate : ',state.contact)
            }
            return {...state}
        default:
            return state;
    }
}
export default ContactReducer;