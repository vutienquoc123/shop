import {
    GET_USER,DELETE_USER
  } from './actionTypes'

  export function getUser(payload){
    return {
        type : GET_USER,
        payload
    }
  }  
  export function deleteUser(payload){
    return {
        type : DELETE_USER,
        payload
    }
  }