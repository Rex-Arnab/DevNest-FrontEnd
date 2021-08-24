import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const TodoAdd = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState('')
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type="text"  value={data} onChange={e => setData(e.target.value)} />
        <button onClick={() => {
          dispatch({ type: 'ADDTODO', payload: data })
          setData("")
        }}>Add</button>
      </div>
    </div>
  )
}

const Card = ({title, index}: {title: string, index: number}) => {
  const dispatch = useDispatch()
  return <span className="todo-list" onClick={() => dispatch({ type: 'DELETETODO', payload: index})}>{title}</span>
}

const DisplayTodoList = () => {
  const todo = useSelector((state: any) => state.todo)
  
  return (
    <div className="todoList">
       {todo.map((item: string, index: number) => {
        return <Card title={item} index={index}/>
      })}
    </div>

  )
}

const App = () => {
  return (
    <div className="App">
      <TodoAdd />
      <DisplayTodoList />
    </div>
  );
}

export default App;
