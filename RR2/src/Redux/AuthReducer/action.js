import *as types from "./actionTypes"

export const logInRequest=()=>{
       return {type:types.LOGIN_REQUEST}
}


export const logInSuccesful=(payload)=>{
    return {type:types.LOGIN_SUCCESFULL, payload}
}


export const logInFailure=()=>{
    return {type:types.LOGIN_FAILURE}
}

export const logOutSuccess=()=>{
    return {type:types.LOGOUT_SUCCESS}
}