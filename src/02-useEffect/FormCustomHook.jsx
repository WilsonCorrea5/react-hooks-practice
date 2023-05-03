import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormCustomHook = () => {

    const {formState, onInputChange, onInputClean, username, email, password} = useForm({
        username: "",
        email: "",
        password: ""
      })
    
  /*  const {username, email, password} = formState;  

   useEffect(() => {
    //console.log("useEffect vive");
  }, []);

  useEffect(() => {
    //console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    //console.log("username changed");
  }, [username]);
 */
  return (
    <>
      <h1>Simple User Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username === "wil2" && <Message />}
      <input
        type="email"
        className="form-control mt-2"
        placeholder="user@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onInputClean} className="btn btn-secondary mt-2">Refresh</button>
    </>
  );
};
