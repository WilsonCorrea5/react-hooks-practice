import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { Todolist } from "./TodoList";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        ToDo App: {todosCount}, <small>Pendiente: {pendingTodos}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <Todolist
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
