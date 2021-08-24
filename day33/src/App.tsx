import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import ThemeContext from './ThemeContext'
import ThemeToggle from './ThemeToggle'
import './App.css'
import TodoList from './TodoList'
import Todos from './Todos'


const App = () => {
  const [theme, setTheme] = useState<boolean>(false)
  

  return (
    <ThemeContext.Provider value={{theme , setTheme}}>
    <div className="App">
      <Todos />
      <ThemeToggle />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
