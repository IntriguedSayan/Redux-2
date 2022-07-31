import { loadData, saveData } from "../../Utilis/accessLocalStorsge"
import *as types from "./actionTypes"

const savedData=loadData("token")
// const logIntoken=savedData.token
// const auth=savedData.isAuth
const initState={
    isAuth:savedData.isAuth || false,
    isAuthLoading:false,
    token:savedData.token || ""
}

export const reducer=(oldState=initState,action)=>{

    const{type,payload}=action

    switch (type){
         
         case types.LOGIN_REQUEST:
                  return{...oldState,isAuthLoading:true}

         case types.LOGIN_SUCCESFULL:
            const newPayload={isAuth:true,token:payload}
            saveData("token",newPayload)
                  return{...oldState,isAuthLoading:false,isAuth:true,token:payload}

         case types.LOGIN_FAILURE:
                  return{...oldState,isAuth:false,isAuthLoading:false,token:""}

         case types.LOGOUT_SUCCESS:
                  const newPayloadTwo={isAuth:false}
                  saveData("token",newPayloadTwo)
                  return{...oldState,isAuth:false,isAuthLoading:false,token:""}

         default: return oldState

    }


}