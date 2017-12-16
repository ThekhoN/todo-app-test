import React, { Component } from "react";
import TodoInput from "../todo-input";
import { PropTypes } from "prop-types";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  render() {
    const { onSubmit } = this.props;
    return (
      <form className="todo-form" onSubmit={onSubmit}>
        <TodoInput />
        <button type="submit" onClick={onSubmit}>
          add todo
        </button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
