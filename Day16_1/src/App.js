import "./styles.css";
import React from "react";

function Card() {
  return (
    <div className="card">
      <img src="https://http.cat/200.jpg" alt="200 cat" />
      <h1>React Card</h1>
      <h2>your main THA is to make meme cards</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
