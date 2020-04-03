import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import './App.css'
import { TodoProvider } from './components/TodoContext';

 const App = () =>{
  return (

   <div className="App">
     <TodoList/>
   </div>

  );
}

export default App;

