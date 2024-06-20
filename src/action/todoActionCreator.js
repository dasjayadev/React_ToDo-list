import { DELETE, SUBMIT, TEXT_SETTER } from "./constant";

//to set the data
function setTextTodoHandler(value){
    return {type:TEXT_SETTER, payload:value}
}
//to delete the data
function deleteTodoHAndler(id){
    return{type:DELETE, payload:id}
}
//to submit the data
function submitTodoHandler(){
    return{type:SUBMIT}
}
//to edit the data
function editTodoHandler(id){
    return{type:"EDIT", payload:id}
}
export {setTextTodoHandler,deleteTodoHAndler,submitTodoHandler}