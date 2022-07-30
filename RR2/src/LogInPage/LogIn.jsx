import { Box, Button, Input, Text } from "@chakra-ui/react";

export default function LogIn(){

    return(
        <Box>
            <Text fontSize="xl" mb="2%"> LOGIN </Text>
            <Input width="250px" placeholder="Email"/>
            <Input width="250px" placeholder="Password"/>
            <Button>LogIn</Button>
        </Box>
    )
}