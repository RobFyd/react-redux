import React, { useState } from "react";
import "./App.css";

function App() {

  // state
  const [counter, setCounter] = useState(0);

  // action - code wich changes the state
  const increment = () => {
    setCounter(counter + 1);
  }

  // view
  return (
    <div className="App">
      Counter: {counter}
      <br />
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
