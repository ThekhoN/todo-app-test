import React from "react";
import PropTypes from "prop-types";

const TodoSubmitButton = ({ onClick, labelText }) => {
  return <button onClick={onClick}>{labelText}</button>;
};

TodoSubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired
};

export default TodoSubmitButton;
