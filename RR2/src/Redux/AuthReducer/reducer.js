import *as types from "./actionTypes"

const initState={
    isAuth:false,
    isAuthLoading:false,
    token:""
}

export const reducer=(oldState=initState,action)=>{

    const{type,payload}=action

    switch (type){




        default: return oldState
    }


}