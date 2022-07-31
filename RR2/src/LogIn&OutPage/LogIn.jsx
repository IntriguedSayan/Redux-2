import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logInFailure, logInRequest, logInSuccesful } from "../Redux/AuthReducer/action";
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom";
export default function LogIn(){
    const[logInState,setLoginState]=useState({email:"",password:""})
    const dispatch=useDispatch()
    const Navigate=useNavigate()

    const handleLogIn=()=>{
            dispatch(logInRequest())
      axios.post(`https://reqres.in/api/login`,logInState)
           .then((res)=>{
            dispatch(logInSuccesful(res.data.token));
            Navigate("/")
            })  
           .catch(()=>dispatch(logInFailure()))
            
    }   

    const handleChange=(e)=>{

        const{name,value}= e.target
        setLoginState({...logInState,
                [name]:value})

    }

    return(
        <Box width="40%" m="auto" mt="2%" textAlign="center" border="2px solid cyan" height="16rem" >
            <Text fontSize="xl"  mb="2%"> LOGIN </Text>
            <FormLabel ml="27%">EMAIL:</FormLabel>
            <Input width="250px" name="email" onChange={handleChange}
            placeholder="Email"/>
            <FormLabel ml="27%" mt="2%">PASSWORD:</FormLabel>
            <Input width="250px" name="password" onChange={handleChange}    placeholder="Password"/>
            <Box>
            <Button mt="2%" onClick={handleLogIn}>LogIn</Button>
            </Box>
        </Box>
    )
}