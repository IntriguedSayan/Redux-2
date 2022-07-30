import { Box, Text } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import axios from "axios"
import { useEffect } from "react";
import { getTodosFailure, getTodosRequest, getTodosSuccess } from "../Redux/AppReducer/action";

export default function Home(){

    const dispatch=useDispatch()
const {isLoading,isError,todo}=useSelector((store)=>{
    return{
        isLoading:store.isLoading,
        isError:store.isError,
        todos:store.todos
    }
},shallowEqual)

const getTodos=()=>{

    dispatch(getTodosRequest())
return axios.get(`https://sayan-data.herokuapp.com/Todos`)

    .then((res)=>dispatch(getTodosSuccess(res.data)))
    
    .catch((err)=>dispatch(getTodosFailure()))
}

    useEffect(()=>{

        getTodos()

    },[])

    return(
            <Box>
                <Text fontSize="2xl" textAlign="center">HOME</Text>
                <TodoInput/>
                
            </Box>
    )
}