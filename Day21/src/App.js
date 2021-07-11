import "./styles.css";
import { useState, useEffect } from "react";

const ShowAddPanel = ({ handleAddTodo, cals, setCals, val, setVal }) => {
  return (
    <form className="panel" onSubmit={handleAddTodo}>
      <input
        type="text"
        value={cals}
        onChange={(e) => setCals(e.target.value)}
        placeholder="Enter Food Name"
        className="inputOne"
      />
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Enter Calori Amount"
        className="inputTwo"
      />
      <button className="BtnOne">Add</button>
    </form>
  );
};

const TodoItem = ({ ca, va }) => {
  const [switchDisplay, setDisplay] = useState(true);
  const [cals, setCals] = useState(ca);
  const [val, setVal] = useState(va);
  const [isDeleted, setDeleted] = useState(true);
  return isDeleted ? (
    <div className="list">
      {switchDisplay ? (
        <>
          <div className="title">
            <span>{cals}</span>
          </div>
          <div className="desc">
            <span>You have consumed {val} calories</span>
          </div>
        </>
      ) : (
        <>
          <input value={cals} onChange={(e) => setCals(e.target.value)} />
          <input value={val} onChange={(e) => setVal(e.target.value)} />
        </>
      )}

      <div className="actionPanel">
        <button
          onClick={() => {
            setDeleted(false);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            console.log(switchDisplay);
            setDisplay(switchDisplay ? false : true);
          }}
        >
          {switchDisplay ? "Edit" : "Done"}
        </button>
      </div>
    </div>
  ) : null;
};
const ShowTodoList = ({ todos }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="TodoList">
      {itemCount ? (
        <div className="alert white">Start Adding Item</div>
      ) : (
        todos.map((todo, index) => {
          return <TodoItem ca={todo[0]} va={todo[1]} key={index} />;
        })
      )}
    </div>
  );
};

export default function App() {
  const [cals, setCals] = useState("");
  const [val, setVal] = useState(0);
  const [todo, setTodo] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodo(() => {
      return [...todo, [cals, val]];
    });
    console.log(todo);
  };
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
