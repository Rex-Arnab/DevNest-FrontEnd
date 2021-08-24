import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import ThemeContext from './ThemeContext'
import ThemeToggle from './ThemeToggle'

interface AppProps {
  title: string,
  discription: string
}

const App = ({ title, discription }: AppProps) => {
  const [counter, setCounter] = useState<number | null>(null)
  const [theme, setTheme] = useState<boolean>(false)
  useEffect(() => {
    setCounter(0) 
  }, [])
  return (
    <ThemeContext.Provider value={{theme , setTheme}}>
    <div className="container text-center mt-5">
      <h1>{ title }</h1>
      <h5>{ discription }</h5>
      <span>Counter</span>
      <div className="mt-5 d-flex justify-content-center">
        {counter !== null && <button 
        onClick={() => setCounter(counter + 1)}
        className="btn btn-secondary">{counter}</button>}
        <ThemeToggle />
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
