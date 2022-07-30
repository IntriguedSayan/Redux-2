import *as types from "./actionTypes"

const initState={
    isLoading:false,
    isError:false,
    todos:[]
}
export const reducer=(oldState=initState,action)=>{

    const{type,payload}=action
    switch (type){
        case types.GET_TODOS_REQUEST:
            return{
                ...oldState,isLoading:true,isError:false
            }
        case types.GET_TODOS_SUCCESS:
            return{
                ...oldState,isLoading:false,isError:false,
                todos:[...payload]
            }    
        case types.GET_TODOS_FAILURE:
            return{
                ...oldState,isLoading:true,isError:true
            }

        default: 
            return oldState
    }


}