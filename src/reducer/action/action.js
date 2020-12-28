// sub_ category

import { LOAD_SUB_CATEGORY } from "../const";

export function loadSubCategory(payload){
    return {
        type : LOAD_SUB_CATEGORY,
        payload
    }
}