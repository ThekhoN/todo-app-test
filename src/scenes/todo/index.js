import React from "react";
import TodoForm from "./components/todo-form";

const Todo = () => {
  return (
    <div className="scene">
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