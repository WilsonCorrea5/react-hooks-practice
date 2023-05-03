import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    start1: 10,
    start2: 20,
    start3: 30,
  });

  const { start1, start2, start3 } = counter;
  
  const handleAdd = () => {
    const newStart = { ...counter, start1: start1 + 1 };
    setCounter(newStart);
  };

  return (
    <>
      <h1>Counter: {start1}</h1>
      <h1>Counter: {start2}</h1>
      <h1>Counter: {start3}</h1>

      <hr />
      <button className="btn btn-primary" onClick={handleAdd}>
        +1
      </button>
    </>
  );
};
