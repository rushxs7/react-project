import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <Flex align="center" 
              justify="flex-start" 
              direction="column" 
              textAlign="center" 
              color="primary.400"
              mt={10} >
                        <Heading as="h1" 
                                size="4xl" 
                                fontFamily="title"
                                fontWeight="extrabold">
                                    To-do list
                        </Heading>
                        <Text as="em" 
                              fontSize="lg" 
                              color="secondary.200">
                                  Simple App to manage your daily to-dos 
                        </Text>
        </Flex>
    )
}
export default Header;
