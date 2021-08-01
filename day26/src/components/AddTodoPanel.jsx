import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, loadTodo } from '../actions'
const AddTodoPanel = () => {
    const [item, setItem] = useState('')
    const dispatch = useDispatch()
    return ( 
        <div className='add-todo'>
            <input type='text' 
             placeholder='Type a todo...' 
             value={item}
             onChange={e => {
                setItem(e.target.value)
             }}
            />
            <button onClick={e => {
                dispatch(
                    addItem({
                        title: item,
                        done: false
                }))
                setItem(e.target.value)
            }}
            >
                Add Todo
            </button>
            <div>
                <button onClick={() => {
                    dispatch(loadTodo())
                }}
                >
                    Load Todo
                </button>
            </div>
        </div>
     );
}
 
export default AddTodoPanel;