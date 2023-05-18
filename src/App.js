import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {ReactComponent as Trashicon} from './assets/Trashicon.svg'
import {ReactComponent as Saveicon} from './assets/Saveicon.svg'
import {ReactComponent as Editicon} from './assets/Editicon.svg'



function App() {
  const [todoList,setTodoList] =useState([])
  const [todo,setTodo] =useState("")
  const addTodo = () => {
    setTodoList(prevTodoList => [...prevTodoList,todo])
    setTodo("")  
  }
 
 
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className='mt-5'>Todo List</h1>
      <div className='d-flex w-50 mt-3'>
      <Form.Control
          className='w-75 me-4'
          placeholder="Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          />
        <Button onClick={addTodo}>Add Todo</Button>
      </div>
        <div className='mt-5 w-75'>
          {todoList.map((todoItem,i) => 
          <div key={i} className='d-flex justify-content-between'> 
            <div className='d-flex'>
              <Form.Check type="checkbox" className='me-2' />
              <label>
              {todoItem}
              </label>
            </div>
            <div>
            <Editicon width={25} height={25} style={{cursor:"pointer"}} className='me-2'/>
            <Saveicon width={25} height={25} style={{cursor:"pointer"}} className='me-2'/>
            <Trashicon width={25} height={25} style={{cursor:"pointer"}}/>
              
             
            </div>
          </div>
          )}
        </div>
      
    </div>
  );
}

export default App;
