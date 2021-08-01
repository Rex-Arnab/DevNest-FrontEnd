import Navbar from './components/Navbar'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import { LoginProvider } from './store'


function App() {
  return (
    <div className="App">
    <Router>
      <LoginProvider>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
      </LoginProvider>
    </Router>
    </div>
  );
}

export default App;
