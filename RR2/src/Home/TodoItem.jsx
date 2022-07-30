import { Button, Flex,Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function TodoItem({id,title,status,handleStatus,handleDelete, elem}){

    const Navigate=useNavigate()


    return(
        <Flex id={id} elem={elem}  justifyContent="space-around" borderRadius="25%" padding="1%">
            <Text >{title}</Text>
            <Button size="lg" colorScheme="cyan" onClick={()=>handleStatus(id,status)}>{status?"COMPLETE":"INCOMPLETE"}</Button>
            <Button onClick={()=>handleDelete(id)} colorScheme="red">DELETE</Button>
            <Button backgroundColor="crimson" color="yellow">EDIT</Button>
        </Flex> 

    )
}