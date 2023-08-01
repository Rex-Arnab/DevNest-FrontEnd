import "./styles.css";
import {useState} from "react";
import CheckerBox from './CheckerBox'
import Card from "./Card";

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>
      {toggle ? <Card /> : <CheckerBox />}
    </div>
  );
}

export default App;
