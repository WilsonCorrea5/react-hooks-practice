import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterNumber = 5) =>{
    for (let index = 0; index < iterNumber; index++) {
        console.log('hey'+index);
        
    }
    return `${iterNumber} completed`
}

export const MemoHook = () => {
  const [Show, setShow] = useState(false);
  const { increment, counter } = useCounter();
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])//useMemo memoriza un valor hasta que su dependencia cambie
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>
      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => setShow(!Show)} className="btn btn-primary">
        Show - Hide {JSON.stringify(Show)}
      </button>
    </>
  );
};
