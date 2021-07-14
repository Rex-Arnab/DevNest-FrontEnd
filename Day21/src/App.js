import "./styles.css";
import { useState } from "react";
import ShowAddPanel from "./components/ShowAddPanel";
import ShowTodoList from "./components/ShowTodoList";

export default function App() {
  const [cals, setCals] = useState("");
  const [val, setVal] = useState(0);
  const [todo, setTodo] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodo(() => {
      return [...todo, [cals, val]];
    });
    setCals("");
    setVal(0);
  };

  //Calculate todolist length
  
  return (
    <div className="App">
      <ShowAddPanel
        handleAddTodo={handleAddTodo}
        cals={cals}
        setCals={setCals}
        val={val}
        setVal={setVal}
      />
      <ShowTodoList todos={todo} />
    </div>
  );
}
