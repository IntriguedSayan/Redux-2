import { Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTodoFailure, getTodoReQuest, getTodoSuccess } from "../Redux/AppReducer/action";

export default function ViewMore(){

    const params=useParams()
    // console.log(params)
    const dispatch=useDispatch()
    const {todo}=useSelector((store)=>{
        return{
            todo:store.AppReducer.todo
        }
    },shallowEqual)

    const getTodo=()=>{
    dispatch(getTodoReQuest())    
    return axios.get(`https://sayan-data.herokuapp.com/Todos/${params.id}`)
            .then((res)=>dispatch(getTodoSuccess(res.data)))
            .catch(()=>dispatch(getTodoFailure()))
    }

    useEffect(()=>{
        getTodo()
    },[])

    return(
        <Box width="42%" m="5% 0 0 29%" padding="2% 0% 2% 0%" border="2px solid cyan" textAlign="center">
            <Link to={`/`}><Text width="25%" backgroundColor="crimson" color="HighlightText">GO BACK</Text></Link>
            <Flex><Text width="35rem" fontSize="3xl" ml="-16%">TODO ID:</Text><Text ml="-37%" fontSize="3xl" color="Highlight">{params.id}</Text></Flex>

            <Text fontSize="2xl" mt="2%">TODO: {todo.title}</Text>

            <Text fontSize="2xl">STATUS: {todo.status?"COMPLETED":"INCOMPLETE"}</Text>

            <Link to={`/home/${params.id}/edit`}><Text m="2% 0 0 25%"  width="50%" fontSize="2xl" backgroundColor="Highlight" color="HighlightText" borderRadius="0.5rem" >EDIT</Text></Link>
        </Box>
    )
}