import './App.css';
import { useState } from 'react'
import store from './store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { AddItem } from './actions'

function TodoPanel(){
  const [item, setItem] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(AddItem(item))
    setItem('')
  }
  return (
    <div className='todoAdder'>
      <h1>Todo List</h1>
      <div className="action">
        <input type="text" placeHolder='Enter Text..' value={item} onChange={(e) => setItem(e.target.value)}/>
        <button onClick={handleAddTodo}>😚</button>
      </div>
    </div>
  )
}

function DisplayTodoList(){
  const todo = useSelector((state) => state.todo)
  return (
    <div className="container">
      {todo.map((item, index) => {
        return <Card title={item} key={index} />
      })}
    </div>
  )
}

function Card({title}){
  return (
    <div className="item">
      <span className="title">{title}</span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoPanel />
        <DisplayTodoList />
      </Provider>
    </div>
  );
}

export default App;
