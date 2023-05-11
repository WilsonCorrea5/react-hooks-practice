import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onInputClean } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime() + 20,
      description,
      done: false,
    };
    onNewTodo(newTodo);
    onInputClean();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Agrega una tarea Aqui!"
        className="form-control"
        value={description}
        name="description"
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-1">
        {" "}
        Agregar
      </button>
    </form>
  );
};
