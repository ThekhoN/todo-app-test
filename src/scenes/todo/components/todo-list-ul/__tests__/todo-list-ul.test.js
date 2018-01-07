import React from "react";
import TodoListUl from "../index";
import { shallow } from "enzyme";
import { todoData } from "./__fixtures__";
import TodoListLi from "../../todo-list-li";

describe("TodoListUl", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoListUl todoData={todoData} />);
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   it("contains number of TodoListLi equal to todoData.length", () => {
  //     expect(wrapper.find(TodoListLi).length).toBe(todoData.length);
  //   });
});
