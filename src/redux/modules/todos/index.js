const initialStateTodo = {
	todos: [
		// {
		// 	id: "",
		// 	text: "",
		// 	status: "todo"
		// }
	]
};

const ADD_TODO = "ADD_TODO";

export const addTodo = payload => ({
	type: ADD_TODO,
	payload
});

const todos = (state = initialStateTodo, action) => {
	switch (action.type) {
	case ADD_TODO:
		return { ...state, todos: [...state.todos, action.payload] };
	default:
		return state;
	}
};

export default todos;
