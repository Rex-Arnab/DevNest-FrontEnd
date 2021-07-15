import './App.css';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to='/'><div>Home</div></Link>
      <Link to='/about'><div>About</div></Link>
      <Link to='/login'><div>Login</div></Link>
    </nav>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <div className="card">
          <Switch>
            <Route path='/' exact>
              <h1>Hello Home</h1>
            </Route>
            <Route path='/about'>
              <h1>Hello About</h1>
            </Route>
            <Route path='/login'>
              <h1>Hello Login</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
