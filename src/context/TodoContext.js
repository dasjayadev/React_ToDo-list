import React, { createContext, useReducer } from 'react';
import reducer from '../reducer/TodoReducer';
import { deleteTodoHAndler, setTextTodoHandler, submitTodoHandler } from '../action/todoActionCreator';

export let todoContextValue = createContext();

function TodoContext({children}) {
  let initalState = {
    text:"",
    todo:[]
  }
  let [todo,dispatch] = useReducer(reducer, initalState)

  //function for seting the text
  function setTodoHandler(value){
    // dispatch({type:"SET_TODO",payload:value})
    //import it from action/todoActionCreator
    dispatch(setTextTodoHandler(value))
  }
  //function for delete handler
  function todoDeleteHandler (id){
    dispatch(deleteTodoHAndler(id))
  }
  //function for submit handler
  function todoSubmitHandler(){
    dispatch(submitTodoHandler())
  }
  return <todoContextValue.Provider value={{...todo,setTodoHandler,todoDeleteHandler,todoSubmitHandler}}>
    {children}
  </todoContextValue.Provider>
}

export default TodoContext;
