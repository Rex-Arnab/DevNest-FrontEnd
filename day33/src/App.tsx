import React from 'react';
import './App.css';

interface TodoListItem {
  todo: {
    text: string;
    complete: boolean;
  }
}

const TodoListItem: React.FC<TodoListItem> = ({ todo }) => {
  return <li><label><input type="checkbox" /> {todo.text}</label></li>
}

const App: React.FC = () => {
  const obj = {text:'hello', complete: false}
  return (
    <div className="App">
      Hello world
      <TodoListItem todo={obj} />
    </div>
  );
}

export default App;
