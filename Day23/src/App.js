import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './Pages/Home'
import Image from './Pages/Gallary'
import { useCatApi } from './components/useCatApi'

function App() {
  const pets = useCatApi() //Preserving the Pet Array
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <div className="card">
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/gallary'>
              <Image pets={pets}/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
