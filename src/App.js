import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle Component From App</button>
      {show ? <FunctionCounter /> : null}
      {/* <FunctionCounter /> */}
    </div>
  );
}

export default App;
