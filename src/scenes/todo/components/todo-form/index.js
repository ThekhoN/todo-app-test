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
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	onInputChange(e) {
		const value = e.target.value;
		this.setState({
			value
		});
	}
	handleSubmit() {
		if (this.state.value === "poop") {
			this.props.onSubmit({
				id: new Date().getTime(),
				text: this.state.value,
				status: "todo"
			});
		}
	}
	render() {
		return (
			<form
				className="todo-form"
				onSubmit={e => {
					e.preventDefault();
					this.handleSubmit();
				}}
			>
				<TodoInput onChange={this.onInputChange} />
				<TodoSubmitButton onClick={this.handleSubmit} labelText="Add Todo" />
			</form>
		);
	}
}

TodoForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
