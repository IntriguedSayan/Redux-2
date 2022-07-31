import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){

    const{isAuth}=useSelector((store)=>{
        return{
            isAuth:store.AuthReducer.isAuth
        }
    },shallowEqual)

    if(isAuth){

        return children
        
    }
        
        return <Navigate to="/logIn" />


}