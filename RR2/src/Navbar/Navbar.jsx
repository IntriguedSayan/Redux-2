import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar(){

    return(
        <Flex width="90%" justifyContent="space-evenly" m="auto" backgroundColor="aquamarine" border="2px solid orange" borderRadius="lg" padding="2%">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/LogIn">LogIn</NavLink>
            
        </Flex>
    )
}