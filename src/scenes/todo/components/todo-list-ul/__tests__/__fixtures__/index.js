import TodoListUl from "../../index";

export const todoData = [
  {
    id: 1,
    text: "Implement React Tests",
    status: "doing"
  },
  {
    id: 2,
    text: "Cook",
    status: "to do"
  }
];

export const todoObj = {
  id: 1,
  text: "Implement React Tests",
  status: "doing"
};

export default {
  component: TodoListUl,
  props: {
    todoData
  }
};
