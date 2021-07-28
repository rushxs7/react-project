import { Flex, Stack, useToast } from '@chakra-ui/react'
import React from 'react'
import useLocalStorage from './useLocalStorage';
import Todos from './components/Todos';
import InputForm from './components/InputForm';
import Header from './components/Header';
import "@fontsource/yellowtail"

function App() {
  const [listValue, setListValue] = useLocalStorage("list", []) //Array of todos obj {id:id, text:todo}

  const toast = useToast();  
  const handleToast = (text, status) => toast({
                                                title: text,
                                                status: status,
                                                isClosable: true,
                                              }) //toast messages

  const checkItem = (item) => {
                                //Checks if item is empty or if it already exists.
                                //Used for adding and editing items to the list of todos
                                if (item === "") {handleToast("Input is empty. Please write something","error"); 
                                                  return false}
                                if (listValue.filter(elem=> elem.text === item).length>0)
                                                 {handleToast(`${item} already exists`,"error"); 
                                                  return false}
                                return true; 
                              }
  const addToList = (item) => {
                            if (checkItem(item)){
                                    setListValue(listValue => listValue.concat(
                                      {text:item,
                                      id:String(Date.now())
                                      }
                                      ));
                                    return true
                                  }
                               }
                                    
  const deleteFromList = (index) =>{
                                    setListValue(listValue=>
                                                 listValue.filter(value => value.text !== index))
                                   }
  const handleEdit = (edited) => {
                                   if (checkItem(edited.text)){
                                    setListValue(listValue => 
                                                listValue.map(elem => elem.id === edited.id ? edited : elem ));
                                    handleToast("Item edited successfully", "success")
                                    return true
                                    }
                                  }                                  
    //const clearList = () => {setListValue([])}
  return (
    <Stack direction="column" minHeight="100vh" bg="white" spacing={15}>
      <Header />

      <Flex alignSelf="center" 
             bg="primary.50"
             boxShadow="lg"
             align="center" 
             justify="space-around" 
             direction="column"
             borderRadius={10}
             minWidth={["sm","sm", "md", "lg"]}
             >
                <InputForm add={addToList}/>
                <Todos data={listValue} deleteTodo={deleteFromList} editTodo={handleEdit} />
      </Flex>

  </Stack>)
}

export default App

