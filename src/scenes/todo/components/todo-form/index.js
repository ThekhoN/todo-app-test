import React, { Component } from "react";
import TodoInput from "../todo-input";
import { PropTypes } from "prop-types";
import TodoSubmitButton from "../todo-submit-button";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange() {}
  render() {
    const { onSubmit } = this.props;
    return (
      <form className="todo-form" onSubmit={onSubmit}>
        <TodoInput onChange={this.onInputChange} />
        <TodoSubmitButton onClick={onSubmit} />
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
