import TodoReducer from "./TodoReducer";
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    todo: TodoReducer
})

export default rootReducer;