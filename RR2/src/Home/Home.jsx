import { Box, Text } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import axios from "axios"
import { useEffect } from "react";
import { addTodosFailure, addTodosRequest, addTodosSuccess, changeStatusFailure, changeStatusRequest, changeStatusSuccesful, deleteFailure, deleteRequest, deleteSuccess, getTodosFailure, getTodosRequest, getTodosSuccess } from "../Redux/AppReducer/action";
import TodoItem from "./TodoItem";

export default function Home(){

    const dispatch=useDispatch()
const {isLoading,isError,todos}=useSelector((store)=>{
    return{
        isLoading:store.AppReducer.isLoading,
        isError:store.AppReducer.isError,
        todos:store.AppReducer.todos
    }
},shallowEqual)

const getTodos=()=>{

    dispatch(getTodosRequest())
return axios.get(`https://sayan-data.herokuapp.com/Todos`)

    .then((res)=>dispatch(getTodosSuccess(res.data)))
    
    .catch((err)=>dispatch(getTodosFailure()))
}
const addTodo=(payload)=>{

    dispatch(addTodosRequest())
return axios.post(`https://sayan-data.herokuapp.com/Todos`,payload)
        .then(()=>dispatch(addTodosSuccess()))
        .catch(()=>dispatch(addTodosFailure()))

}
const handleAdd=(payload)=>{
    
    addTodo(payload).then(()=>getTodos())
}
const changeStatus=(id,status)=>{

    dispatch(changeStatusRequest())
return axios.patch(`https://sayan-data.herokuapp.com/Todos/${id}`,{
            status:!status 
        })
        .then(()=>dispatch(changeStatusSuccesful()))
        .catch(()=>dispatch(changeStatusFailure()))
}

const handleStatus=(id,status)=>{

        changeStatus(id,status).then(()=>getTodos())
}
const initDelete=(id)=>{

    dispatch(deleteRequest())
return axios.delete(`https://sayan-data.herokuapp.com/Todos/${id}`)
            .then(()=>dispatch(deleteSuccess()))
            .catch(()=>dispatch(deleteFailure()))

}
const handleDelete=(id)=>{

    initDelete(id).then(()=> getTodos())

}

    useEffect(()=>{

        getTodos()

    },[])

    return(
            <Box>
                <Text fontSize="2xl" textAlign="center">HOME</Text>
                <TodoInput addTodo={handleAdd}/>
                {
                    todos.length>0 && todos.map((elem)=>(
                        <TodoItem key={elem.id} id={elem.id} title={elem.title} handleStatus={handleStatus} handleDelete={handleDelete}
                         status={elem.status}/>
                    ))
                }
            </Box>
    )
}