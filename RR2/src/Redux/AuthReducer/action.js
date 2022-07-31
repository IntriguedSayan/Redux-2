import *as types from "./actionTypes"

export const logInRequest=()=>{
       return {type:types.LOGIN_REQUEST}
}


export const logInSuccesful=()=>{
    return {type:types.LOGIN_SUCCESFULL}
}


export const logInFailure=()=>{
    return {type:types.LOGIN_FAILURE}
}