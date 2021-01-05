import { LOAD_SUB_CATEGORY } from "../const";

let initialState ={}

export default function subCategory(state=initialState,action){
    switch (action.type) {
        case LOAD_SUB_CATEGORY:
            {
                state = action.payload;
                console.log("sub_category: ", state);
            }
            return {...state}
    
        default:
            return state;
    }
}