import { memo } from "react";
// con la funcion memo de React memorizamos el componente que le mandemos como argumento, esto con el fin de que no se renderice en caso de que su componente padre deba re-renderizarse. memo permite que el componente que tiene en el argumento se renderice siempre y cuando sus props cambien. 
export const Small = memo(({ value }) => {
  console.log("me renderize");
  return <small>{value}</small>;
});
