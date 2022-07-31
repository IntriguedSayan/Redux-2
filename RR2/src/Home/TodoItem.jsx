import { background, Button, Flex,Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"

export default function TodoItem({id,title,status,handleStatus,handleDelete, elem}){

    const Navigate=useNavigate()


    return(
        <Flex id={id} elem={elem}  justifyContent="space-around" borderRadius="25%" padding="1%">
            <Text >{title}</Text>
            <Button size="lg" colorScheme="cyan" onClick={()=>handleStatus(id,status)}>{status?"COMPLETE":"INCOMPLETE"}</Button>
            <Button onClick={()=>handleDelete(id)} colorScheme="red">DELETE</Button>
            <Link to={`/home/${id}`}><Text backgroundColor="Highlight" color="gold">ViewMore</Text></Link>
        </Flex> 

    )
}