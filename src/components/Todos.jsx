import React, {useState} from "react"
import {Stack, StackDivider, IconButton,Text, Input } from "@chakra-ui/react";
import {
    Alert,
    AlertIcon,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const Todos = ({data, deleteTodo, editTodo}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [editValue, setEditValue] = useState("")
    const handleInput = (value) => setEditValue(value)
    
    return (
        <Stack mt={10} fontSize={{base:"xl", md:"2xl"}} textAlign="center" alignItems="center" spacing={6} bg="red.50" borderRadius={10}>         
          <AnimatePresence>                   
            {data.length > 0 ?
                           <Stack 
                                 divider={<StackDivider borderColor="whiteAlpha.100" 
                                                        size="md"/>} 
                                 minWidth={["sm","sm", "md", "lg"]}
                                 spacing={1}
                                 mt={2}
                                 mb={10}
                                 >
                                      {data.map((elem) => 
                                      (<Stack as={motion.div}
                                        key={elem.id}
                                        layoutId={elem.id}          
                                        initial={{scale:0}}
                                        exit={{scale:0}}
                                        animate={{scale:0.9}} 
                                        direction="row"
                                        bg="yellow.100"
                                        color="yellow.500"
                                        p={2} 
                                        pt={4} 
                                        pb={4}
                                        justify="space-around"
                                        align="center"
                                        borderRadius={10}
                                        boxShadow="md"
                                        >
                                                    <Text flex="1" 
                                                          maxWidth="30ch">
                                                                          {elem.text}
                                                    </Text>
                                                    <IconButton 
                                                                color="red.400" 
                                                                _hover={{bg:"whiteAlpha.500"}} 
                                                                bg="transparent" 
                                                                icon={<FaTrashAlt/> }
                                                                onClick={()=>deleteTodo(elem.text)}/>
                                                    <IconButton 
                                                                color="red.400" 
                                                                _hover={{bg:"whiteAlpha.500"}} 
                                                                bg="transparent" 
                                                                icon={<FaPencilAlt/>}
                                                                onClick={()=> {handleInput(elem); onOpen()}}/>
                                        </Stack>))}
                                     </Stack>
                            : 
                            <Alert status='warning'
                                   borderRadius={10}
                                   px={10}
                                   py={5}
                                   mt={2}
                                   mb={10}
                                   boxShadow="md">
                                              <AlertIcon /> 
                                              Your to-do list is empty
                            </Alert>  }
          </AnimatePresence>

          <Modal isOpen={isOpen} 
                 onClose={onClose} 
                 isCentered 
                 closeOnEsc
                 size="sm" >
          <ModalOverlay />
          <ModalContent bg="yellow.100">
            <ModalHeader>Edit your to-do</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input bg="white" 
                     value={editValue.text} 
                     onChange={(e)=> handleInput({id:editValue.id,
                                                text:e.target.value})}/>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" 
                      mr={3} 
                      onClick={()=> {editTodo(editValue)? onClose() : null}}>
                Edit
              </Button>
              <Button variant="gray"
                      onClick={onClose}>
                        Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

    </Stack>
    )
}
export default Todos;