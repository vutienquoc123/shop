import { CHANGE_PAYMENT } from "../Actions/actionTypes";

let initialState={
   card:{},
}
const PaymentReducer=(state=initialState,action)=>{
    switch (action.type) {
        case CHANGE_PAYMENT:
            {
                state.card = action.payload
                console.log('change card : ',state.card)
            }
            return {...state}
        default:
            return state;
    }
}
export default PaymentReducer;