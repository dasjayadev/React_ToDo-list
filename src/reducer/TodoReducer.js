
import { DELETE, SUBMIT, TEXT_SETTER } from '../action/constant';

function TodoReducer(state,action) {
    if(action.type == TEXT_SETTER){
        return {...state,text: action.payload}
    }
    else if(action.type == SUBMIT){
        let obj = {
            id:new Date().getMilliseconds(),
            text:state.text,
        }
        return {...state,todo: [...state.todo,obj], text:""}
    }
    else if(action.type == DELETE){
        return {...state,todo: state.todo.filter(item => item.id != action.payload)}
    }
    else{
        return state
    }
}

export default TodoReducer;
