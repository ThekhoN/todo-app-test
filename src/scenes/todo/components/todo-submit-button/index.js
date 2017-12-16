import React from "react";
import PropTypes from "prop-types";

const AddToDoButton = ({ onClick }) => {
  return <button onClick={onClick}>Add Todo</button>;
};

AddToDoButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddToDoButton;
