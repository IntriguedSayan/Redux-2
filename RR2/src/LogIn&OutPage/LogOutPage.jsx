import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logOutSuccess } from "../Redux/AuthReducer/action";

export default function LogOut(){

    const dispatch=useDispatch()
    const Navigate=useNavigate()

    const handleLogOut=()=>{

         dispatch(logOutSuccess());

         Navigate("/logIn")

    }

    return(
        <Button m="10% 0 0 50%" onClick={handleLogOut}>LogOut</Button>
    )
}