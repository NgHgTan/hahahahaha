import { Box, Text } from "@chakra-ui/react"
import React from "react";

const Page2 = React.memo(() =>{
    return(
        <Box bg="red.100" h='200vh'>
            <Text>
                HELLO WORLD 2
            </Text>
        </Box>
    )
})

export default Page2;