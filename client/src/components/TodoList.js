
import React,{useEffect,useState,useContext} from 'react';
import Todo from './Todo';
import axios from 'axios';
import io from 'socket.io-client';
const socket = io('https://reactask.herokuapp.com/');



const TodoList = ()=>
{
  

  // const [todos,setTodos] = useContext(TodoContext);
   const [todos,setTodos] = useState([]);
  const [title,setTitle] = useState();
  const [handle,sethandle] = useState(false);
  const [desc,setDesc] = useState();
  const [priority,setPriority] = useState();
  const [date,setDate] = useState();
  const [show,setShow] = useState(false);
  const [showTitle,setTitleShow] = useState(false);
  const [showDesc,setDescShow] = useState(false);
  const [showPriority,setPriorityShow] = useState(false);
  const [showDate,setDateShow] = useState(false);
  useEffect(() => {
    socket.on('add',({title,desc,date,priority})=>
    {
  setTitle(title);
  setDesc(desc);
  setPriority(priority);
  setDate(date);

    });
    
   
   
  },[title,desc,priority,date]);
  async function getTodos()
  {
    const todo = await axios.get('https://reactask.herokuapp.com/todos/');
    setTodos(todo.data);
  // setTodos(todo.json());
  console.log(todo.data[0]);
  }

const  addTodo = async (e)=>
  {
    e.preventDefault();
   const newTodo = {
     title,
     desc,
     priority,
     date
   };
  console.log(newTodo);
  const newT = await axios.post(`https://reactask.herokuapp.com/todos/add/`,newTodo);
  


  getTodos();
    
  }
  const doshow = (e)=>
  {
    e.preventDefault();
      setShow(true);
  };
  const doClose = (e)=>
  {
    e.preventDefault();
      setShow(false);
  };

 
  

  useEffect(()=>
  {
    getTodos();
  },[]);
  socket.emit('add',{title,desc,date,priority});
 
     
  
  const header =
    <div className="header">
      <h1>Todo List</h1>
    </div>;
  
  

  const addButton = 
      <div className="add" onClick = {doshow}>
      <i className="fa fa-plus" aria-hidden="true"></i>
    </div>;
    
  




  return(
  
    <div className="container">
      
    {header}
    {/* {show?{modal}:<br></br>} */}
    {/* {modal} */}
  {show?<div className="add-modal">
 
    <a className="close" onClick={doClose}>X</a>
    <form className="form">
      <h1>Enter Details of Todo</h1>

    <label>Title</label>
    <input type="text" placeholder="Todo Title" onChange = {(e)=> setTitle(e.target.value)} value={title}/>
<label>Description</label>
<textarea type="text" placeholder="Todo Description" onChange = {(e)=> setDesc(e.target.value)} value={desc}>
</textarea>
<label>Priority</label>
<select onChange = {(e)=> setPriority(e.target.value)} value={priority}>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>
<label>Date</label>
<input type="date" onChange = {(e)=> setDate(e.target.value)} value={date}/>
<button onClick = {addTodo}>Add</button>
    </form>
  
  </div>:<br></br>}

  {
 
  todos.length>0?
    todos.map(t=>(
      <Todo t={t} showTodo ={getTodos}/>
      )):<h1 style={{textAlign:"center"}}>No Todos Found...</h1>
    }
{addButton}
  
  </div>
  
  );
}

export default TodoList;