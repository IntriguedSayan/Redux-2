import *as types from "./actionTypes"

export const getTodosRequest=()=>{

    return {type:types.GET_TODOS_REQUEST}

}

export const getTodosSuccess=()=>{

    return {type:types.GET_TODOS_SUCCESS}

}

export const getTodosFailure=()=>{

    return {type:types.GET_TODOS_FAILURE}

}

export const addTodosRequest=()=>{

    return {type:types.ADD_TODOS_REQUEST}
}

export const addTodosSuccess=()=>{

    return {type:types.ADD_TODOS_SUCCESS}
}

export const addTodosFailure=()=>{

    return {type:types.ADD_TODOS_FAILURE}
}
