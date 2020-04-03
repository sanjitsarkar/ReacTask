import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
// import {TodoContext} from './TodoContext';
export default function Todo({t,showTodo}) {


  // const [todos,setTodos] = useContext(TodoContext);
  const [title,setTitle] = useState(t.title);
  const [update,setUpdate] = useState(false);
  const [desc,setDesc] = useState(t.desc);
  const [priority,setPriority] = useState(t.priority);
  const [date,setDate] = useState(t.date);
  const [showTitle,setTitleShow] = useState(false);
  const [showDesc,setDescShow] = useState(false);
  const [showPriority,setPriorityShow] = useState(false);
  const [showDate,setDateShow] = useState(false);



 



  const  deleteTodo = async (e)=>
  {
    e.preventDefault();
    const id = e.target.id;
  
  const todo = await axios.delete(`https://reactask.herokuapp.com/todos/${id}`);
  
  showTodo();

    
  }
  
  // const  updateTodo = async (e)=>
  // {
  //   e.preventDefault();
  //  const newTodo = {
  //    title,
  //    desc,
  //    priority,
  //    date
  //  };
  // console.log(newTodo);
  // const newT = await axios.post(`http://localhost:5000/todos/add/`,newTodo);
  
  
  
  // getTodos();
    
  // }

  

  
const  updateTodo = async (e)=>
{
  e.preventDefault();
  let id = e.target.id;
  
 const newTodo = {
   title,
   desc,
   priority,
   date
 };


console.log(newTodo);
console.log(id);
const newT = await axios.post(`https://reactask.herokuapp.com/todos/update/${id}`,newTodo);

setDateShow(false);
setTitleShow(false);
setDescShow(false);
setPriorityShow(false);
// getTodos();
  
}


  


const doShowTitle = (e)=>
{
  
  e.preventDefault();
  // alert("Hello");
  if(!showTitle)
  setTitleShow(true);
  else
  setTitleShow(false);
};
// const doHideTitle = (e)=>
// {
//   e.preventDefault();
//   setTitleShow(false);
// };
const doShowDesc = (e)=>
{
  e.preventDefault();
  if(!showDesc)
    setDescShow(true);
    else
    setDescShow(false);
};
// const doHideDesc= (e)=>
// {
//   e.preventDefault();

//     setDescShow(false);
// };
const doShowPriority = (e)=>
{
  e.preventDefault();
  if(!showPriority)
    setPriorityShow(true);
    else
    setPriorityShow(false);
};
// const doHidePriority = (e)=>
// {
//   e.preventDefault();
//     setPriorityShow(false);
// };
const doShowDate = (e)=>
{
  e.preventDefault();
  if(!showDate)
    setDateShow(true);
    else
    setDateShow(false);
};
// const doHideDate = (e)=>
// {
//   e.preventDefault();
//     setDateShow(false);
// };

  return (
    <div className="Todos" key={t._id}>
      <ul>
      <li className="title"> <i className="fa fa-tasks"></i> 
      {
        !showTitle?
      <div>{title}</div>
      
      :<input type="text"  placeholder="Todo Title" onChange={(e)=> setTitle(e.target.value)} value={title}/>
}
      <a onClick = {doShowTitle} className="fa fa-edit"></a><a id={t._id} onClick={deleteTodo} className="fa fa-trash"></a><a id={t._id} onClick={updateTodo} className="fa fa-save"></a></li>
      <li className="desc">
      {!showDesc?<div> {desc} </div>:
    <textarea onChange={(e)=> setDesc(e.target.value)} placeholder="Todo Description" value={desc}></textarea>
}
      <a className="fa fa-edit" onClick = {doShowDesc}></a></li>
     
    <li className="priority">
    {!showPriority?<div> 
      {priority}
      </div>:
    <select onChange = {(e)=> setPriority(e.target.value)} value={priority}>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>
}
       <a className="fa fa-edit" onClick = {doShowPriority}></a></li>
    <li className="date"> <i className="fa fa-calendar" aria-hidden="true"></i> 
    {!showDate?<div> 
    {date} </div>:
    <input type="date" onChange = {(e)=> setDate(e.target.value)} value={date}/>
    
}
<a className="fa fa-edit" onClick = {doShowDate}></a>
    </li>
      
     

      </ul>
      </div>
    
  )
}
