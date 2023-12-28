import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const handleInc = () => {
    setCounter((PrevCount) => PrevCount + 1);
  };
  const handleDec = () => {
    setCounter((PrevCount) => PrevCount - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <div>
        <p>Count: {counter}</p>
      </div>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </>
  );
}
