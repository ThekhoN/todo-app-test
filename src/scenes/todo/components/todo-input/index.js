import React, { Component } from "react";
import PropTypes from "prop-types";

// const TodoInput = ({ onChange }) => {
//   return (
//     <input
//       type="text"
//       className="todo-input"
//       autoFocus
//       placeholder="do something..."
//       onChange={onChange}
//     />
//   );
// };

class TodoInput extends Component {
  constructor() {
    super();
    this.autoFocus = this.autoFocus.bind(this);
  }
  autoFocus() {
    this.inputElem.focus();
  }
  componentDidMount() {
    this.autoFocus();
  }
  render() {
    const { onChange } = this.props;
    return (
      <input
        type="text"
        className="todo-input"
        ref={input => (this.inputElem = input)}
        placeholder="do something..."
        onChange={onChange}
      />
    );
  }
}

TodoInput.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default TodoInput;
