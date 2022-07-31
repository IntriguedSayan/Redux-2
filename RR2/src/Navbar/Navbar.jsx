import { Flex } from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { store } from "../Redux/store";

export default function Navbar(){
    const {isAuth}=useSelector((store)=>{
        return{
            isAuth:store.AuthReducer.isAuth
        }
    },shallowEqual)
    return(
        <Flex width="90%" justifyContent="space-evenly" m="auto" backgroundColor="aquamarine" border="2px solid orange" borderRadius="lg" padding="2%">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/LogIn">LogIn</NavLink>
            {isAuth && <NavLink to="/logOut">LOGOUT</NavLink>}
        </Flex>
    )
}