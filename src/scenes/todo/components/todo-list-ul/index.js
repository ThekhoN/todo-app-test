import React from "react";
import PropTypes from "prop-types";
import TodoListLi from "../todo-list-li";

const TodoListUl = ({ todoData }) => {
  return (
    <ul className="todo-list-ul">
      {todoData.map(todo => <TodoListLi key={todo.id} todoObj={todo} />)}
    </ul>
  );
};

TodoListUl.propTypes = {
  todoData: PropTypes.array.isRequired
};

export default TodoListUl;
