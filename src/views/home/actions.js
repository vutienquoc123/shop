import { ADD_TOTAL, CHANGE_CATEGORY, CHANGE_SUB_CATEGORY, SUB_TOTAL } from "./const";


export function addTotal(){
    return {
        type : ADD_TOTAL
    }
}
export function subTotal(){
    return {
        type : SUB_TOTAL
    }
}

export function changeCategory(payload){
    return {
        type : CHANGE_CATEGORY,
        payload
    }
}
export function changeSubCategory(payload){
    return {
        type : CHANGE_SUB_CATEGORY,
        payload
    }
}