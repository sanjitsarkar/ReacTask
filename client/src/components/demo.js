import React,{useContext,useEffect,useState} from 'react'
import {TodoContext} from './TodoContext';
const Demo = () => {

const [todos,setTodos] = useContext(TodoContext);
console.log(todos);
  return (
    <div>
      <h1>{todos}</h1>
    </div>
  )
}
export default Demo;