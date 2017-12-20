import React from "react";
import PropTypes from "prop-types";

const AddToDoButton = ({ onClick, labelText }) => {
  return <button onClick={onClick}>{labelText}</button>;
};

AddToDoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired
};

export default AddToDoButton;
