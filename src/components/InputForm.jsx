import { IconButton, Input, Stack } from '@chakra-ui/react';
import React , {useState} from 'react'
import {FaPlus} from "react-icons/fa"

const InputForm = ({add})=> {
    const [inputValue, setInputValue] = useState("") 
    const handleChange = (event) => setInputValue(event.target.value)
    const checkEnter = (event) => {if(event.key === 'Enter'){
        add(inputValue) ? setInputValue("") : null
    }}
    
    return (
        <Stack mt={10} 
               direction="row" 
               spacing={1}>

              <Input size="lg" 
                    placeholder="Write new to-do" p={1}
                    value={inputValue} 
                    onChange={handleChange}
                    onKeyPress={checkEnter}
                    bg="white"/>
              <IconButton size="xl" 
                          p={2} 
                          px={3} 
                          bg="red.500" 
                          icon={<FaPlus/>} 
                          onClick={() => add(inputValue) ? setInputValue("") : null } />
        </Stack>
    )
}

export default InputForm;