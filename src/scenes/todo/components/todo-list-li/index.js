import React from "react";
import PropTypes from "prop-types";

const TodoListLi = ({ todoObj }) => {
  return <li className="todo-list-li">{todoObj.text}</li>;
};

TodoListLi.propTypes = {
  todoObj: PropTypes.object.isRequired
};

export default TodoListLi;
