import React from "react";
import TodoForm from "./components/todo-form";

const Todo = () => {
  return (
    <div className="scene">
      <h2>Todo App</h2>
      <br />
      <TodoForm
        onSubmit={e => {
          e.preventDefault();
          console.log("handling submit: ", e);
        }}
      />
    </div>
  );
};

export default Todo;
