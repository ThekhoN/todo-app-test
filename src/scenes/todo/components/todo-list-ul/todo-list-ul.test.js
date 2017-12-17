import React from "react";
import TodoList from "./index";
import { shallow, mount } from "enzyme";
import { todoData as data } from "../../../../services/mocks/todo";
import TodoListLi from "../todo-list-li";

describe("TodoList", () => {
  let wrapper, todoData;
  beforeEach(() => {
    todoData = data;
    wrapper = shallow(<TodoList todoData={todoData} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("contains number of TodoListLi equal to todoData.length", () => {
    expect(wrapper.find(TodoListLi).length).toBe(todoData.length);
  });
});
