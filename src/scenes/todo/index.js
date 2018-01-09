import React, { Component } from "react";
import TodoForm from "./components/todo-form";
import Header from "../../components/header";
import { connect } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import PropTypes from "prop-types";

class Todo extends Component {
	constructor() {
		super();
		this.state = {
			todo: ""
		};
	}
	render() {
		return (
			<div className="scene">
				<Header title="Todo App" />
				<br />
				<TodoForm onSubmit={this.props.addTodo} />
			</div>
		);
	}
}

Todo.propTypes = {
	addTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ todos: state.todos.todos });

const mapDispatchToProps = dispatch => ({
	addTodo: payload => dispatch(addTodo(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
