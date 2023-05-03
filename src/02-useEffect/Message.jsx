import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {//<--- efecto segundario
    const onMouseMove = ({ y, x }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {//<--- limpieza del efecto
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
      <h4>user already exist</h4>
      {JSON.stringify(coords)}
    </>
  );
};
