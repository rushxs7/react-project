import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <Flex align="center" 
              justify="flex-start" 
              direction="column" 
              textAlign="center" 
              color="red.600"
              mt={10} >
                        <Heading as="h1" 
                                size="4xl" 
                                fontFamily="title"
                                fontWeight="extrabold">
                                    Sunday
                        </Heading>
                        <Text as="em" 
                              fontSize="lg" 
                              color="gray.600">
                                  Your weekly reset... 
                        </Text>
        </Flex>
    )
}
export default Header;
