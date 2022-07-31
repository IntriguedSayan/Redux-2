import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function TodoInput({addTodo}){

    const[currTodo,setCurrTodo]=useState("")
    
    const handleAdd=()=>{
        const payload={
            id:Date.now(),
            title:currTodo,
            status:false
        }

    addTodo(payload)

    }


    return(

        <Box>

        <Input size="lg" onChange={(e)=>setCurrTodo(e.target.value)} display="flex" justifyContent="center" alignItems="center" m="12% 0 0 36%" width="400px" placeholder="Add Todo"/>
        <Button size="lg" m="1% 0 0 47%" onClick={handleAdd} >ADD</Button>

        </Box>
    )
}