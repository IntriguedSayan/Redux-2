import *as types from "./actionTypes"

export const getTodosRequest=()=>{

    return {type:types.GET_TODOS_REQUEST}

}

export const getTodosSuccess=(payload)=>{

    return {type:types.GET_TODOS_SUCCESS, payload}

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

export const changeStatusRequest=()=>{

    return {type:types.CHANGE_STATUS_REQUEST}
}

export const changeStatusSuccesful=()=>{

    return {type:types.CHANGE_STATUS_SUCCESFUL}
}

export const changeStatusFailure=()=>{

    return {type:types.CHANGE_STATUS_FAILURE}
}

export const deleteRequest=()=>{

    return {type:types.DELETE_REQUEST}
}

export const deleteSuccess=()=>{

    return {type:types.DELETE_SUCCESFUL}
}
export const deleteFailure=()=>{

    return {type:types.DELETE_FAILURE}
}

export const getTodoReQuest=()=>{

    return {type:types.GET_TODO_REQUEST}
}

export const getTodoSuccess=(payload)=>{

    return {type:types.GET_TODO_SUCCESS,payload}
}

export const getTodoFailure=()=>{

    return {type:types.GET_TODO_FAILURE}
}

export const editRequest=()=>{

    return {type:types.EDIT_REQUEST}
}


export const editSuccessful=()=>{

    return {type:types.EDIT_SUCCESSFUL}
}


export const editFailure=()=>{

    return {type:types.EDIT_FAILURE}
}

