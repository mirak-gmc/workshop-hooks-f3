import React, { useState, useEffect } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(10);
  const [isShow, setShow] = useState(false);
  function Incremnt() {
    setCount(count + 1);
  }
  const toggle = () => setShow(!isShow);

  //component did mount
  useEffect(() => {
    console.log("component is rendring ...... ");

    return () =>
      alert("The component is gone from the function Components :'(");
  }, []);

  //component did update
  useEffect(() => {
    console.log("Count is updated , " + count);
    return () => alert("Another component will unmount :'(");
  }, [count]);

  return (
    <div className="counter">
      <button onClick={toggle}>Toggle </button>
      <h1>Function Component</h1>
      <h1>{count}</h1>
      <button onClick={Incremnt}>Incremnt</button>
    </div>
  );
};

export default FunctionCounter;
