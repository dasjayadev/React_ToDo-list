import React, { useContext } from 'react';
import { todoContextValue } from '../context/TodoContext';

function Todo() {
let {text,todo,setTodoHandler,todoSubmitHandler,todoDeleteHandler} = useContext(todoContextValue)
function submitHandler(){
  todoSubmitHandler()
}
function textHandler(e){
  setTodoHandler(e.target.value)
}
function deleteHandler(id){
  todoDeleteHandler(id)
}

  return (
    <>
      <div>TOTO LIST</div>
      <br />
      <input type="text" placeholder='Enter Your Text' onChange={textHandler} value ={text} />
      <button onClick={submitHandler}>ADD</button>
      {
        todo.length > 0 && 
        <>
          {
            todo.map((item)=>{
              return <div key={item.id}>
                <h4>{item.text}</h4>
                <button onClick={()=>{
                  deleteHandler(item.id)
                }}>Delete</button>
              </div>

            })
          }
        </>
      }
    </>
  );
}

export default Todo;
