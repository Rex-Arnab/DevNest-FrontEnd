import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../actions";

const DisplayTodoList = () => {
    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()
    return ( 
        <div className='list-todos'>
            {todos.map((todo, index) => (
                <div key={index}>  
                    <p style={{ display: 'inline-block'}}>{todo.title}</p>
                    <button onClick={() => {
                        dispatch(removeItem(index))
                    }}>Delete</button>
                </div>
            ))}
          
        </div>
     );
}
 
export default DisplayTodoList;