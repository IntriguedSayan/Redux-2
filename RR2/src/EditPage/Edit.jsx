import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import { editFailure, editRequest, editSuccessful, getTodoFailure, getTodoReQuest, getTodoSuccess } from "../Redux/AppReducer/action";

export default function Edit(){

    const [text,setText]=useState("")
    const params=useParams()
    const dispatch=useDispatch()
    const {todo}=useSelector((store)=>{
        return{
            todo:store.AppReducer.todo
        }
    },shallowEqual)
    // console.log(params)
    const getTodo=()=>{
        dispatch(getTodoReQuest())    
        return axios.get(`https://sayan-data.herokuapp.com/Todos/${params.id}`)
                .then((res)=>dispatch(getTodoSuccess(res.data)))
                .catch(()=>dispatch(getTodoFailure()))
        }

    const editing=()=>{
        dispatch(editRequest())
    return  axios.patch(`https://sayan-data.herokuapp.com/Todos/${params.id}`,{
                title:text
    })   
                 .then(()=>dispatch(editSuccessful()))   
                 .catch(()=>dispatch(editFailure()))
    }    
    const confirmChange=()=>{
        editing().then(()=>getTodo())

    }
    useEffect(()=>{
        getTodo()

    },[])



    return(
        <Box width="45%" m="auto" mt="5%" textAlign="center" border="2px solid crimson" height="18rem" padding="1% 0 3% 0 " borderRadius="0.8rem">
            <Link to={`/home/${params.id}`}><Text width="25%" backgroundColor="crimson" color="HighlightText">GO BACK</Text></Link>
            <Text fontSize="2xl" mt="2%" color="Highlight">TODO ID:{params.id}</Text>
            <Text fontSize="xl" mt="2%" backgroundColor="Highlight" color="HighlightText">TODO TITLE: {todo.title}</Text>
            <FormLabel ml="20%" mt="2%">Change Title:</FormLabel>
            <Input placeholder="Change title" width="60%" onChange={(e)=>setText(e.target.value)} />
            <Box mt="3%">
            <Button size="md" width="25%" colorScheme="pink" onClick={confirmChange}>CONFIRM</Button>
            </Box>
        </Box>
    )
}