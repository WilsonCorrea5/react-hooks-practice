import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} type="text" placeholder="..." className="form-control" />
      <button onClick={onClick} className="mt-2 btn btn-primary">Set Focus</button>
    </>
  );
};
