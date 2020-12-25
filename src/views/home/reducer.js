import { ADD_TOTAL, CHANGE_CATEGORY, SUB_TOTAL } from "./const";

let initialState={
    listproduct:[],
    total: 0,
    category_name: '',
}

const homeReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TOTAL:
            {
                console.log('add total')
                state.total = state.total+ 1;
            }
            return {...state};
        case SUB_TOTAL:
            {
                state.total = state.total-1;
            }
            return {...state}
        case CHANGE_CATEGORY:
            {
                state.category_name = action.payload
                console.log('change cate : ',state.category_name)
            }
            return {...state}
        default:
            return state;
    }
}

export default homeReducer;