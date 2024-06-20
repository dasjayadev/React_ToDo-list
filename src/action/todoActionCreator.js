import { DELETE, SUBMIT, TEXT_SETTER } from "./constant";

function setTextTodoHandler(value){
    return {text:TEXT_SETTER,payload:value}
}
function deleteTodoHAndler(id){
    return{type:DELETE,payload:id}
}
function submitTodoHandler(){
    return{type:SUBMIT}
}
export {setTextTodoHandler,deleteTodoHAndler,submitTodoHandler}