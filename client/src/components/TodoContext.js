import React,{useState,createContext} from 'react';
// import axios from 'axios';

export const TodoContext = createContext();


export const TodoProvider = async (props) => 
{
  
  const [todos,setTodos] = useState();
  
  // const todo = await axios.get('http://localhost:5000/todos/');
 
  setTodos("Hello");
 
  
  return(
<TodoContext.Provider value = {[todos,setTodos]}>
  {props.children}
</TodoContext.Provider>
  );
};

