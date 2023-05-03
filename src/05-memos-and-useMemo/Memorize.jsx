import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";
export const Memorize = () => {
  const [Show, setShow] = useState(false);
  const { increment, counter } = useCounter();
  return (
    <>
      <h1>
        {" "}
        Counter: <Small value={counter}/>
      </h1>
      <hr />
      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => setShow(!Show)} className="btn btn-primary">
        Show - Hide {JSON.stringify(Show)}
      </button>
    </>
  );
};
