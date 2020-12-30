import {
    CHANGE_CONTACT,CHANGE_ADDRESS,CHANGE_TIME,CHANGE_PAYMENT
  } from './actionTypes'
  
  export function changeContact(payload){
    return {
        type : CHANGE_CONTACT,
        payload
    }
  }
  export function changeAddress(payload){
    return {
        type : CHANGE_ADDRESS,
        payload
    }
  }
  export function changeTime(payload){
    return {
        type : CHANGE_TIME,
        payload
    }
  }
  export function changePayment(payload){
    return {
        type : CHANGE_PAYMENT,
        payload
    }
  }
