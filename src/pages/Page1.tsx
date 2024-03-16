import { Box, Text } from "@chakra-ui/react"
import React from "react";

const Page1 = React.memo(() =>{
    return(
        <Box bg="blue.100" h='200vh'>
            <Text> 
                HELLO WORLD 1
            </Text>
        </Box>
    )
})

export default Page1;