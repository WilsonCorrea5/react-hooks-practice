import { useLayoutEffect, useRef, useState } from "react";

export const QuoteItem = ({ author, quote }) => {
  const [boxSize, setBoxSize] = useState({height: 0, width: 0})
  const pRef = useRef();
  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect(); //getBoundingClientRect() es un elemento del html con el cual podemos obtener info de medidas del elemento desde el cual fue invocado. en este caso pRef.
    setBoxSize({width, height})
  }, [quote])

  return (
    <>
      <blockquote style={{display: 'flex'}} className="blockquote text-end">
      <p ref={pRef} className="mb-1">{quote}</p>
      <footer className="blockquote-footer"> by {author}</footer>
      </blockquote>
      
      <code> {JSON.stringify(boxSize)}</code>
    </>
    
  );
};
