import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "wil",
    email: "wil@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log({ value, name });
  };

  useEffect(() => {
    //console.log("useEffect vive");
  }, []);

  useEffect(() => {
    //console.log("formState changed");
  }, [formState]);

  useEffect(() => {
    //console.log("username changed");
  }, [username]);

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
    </>
  );
};
