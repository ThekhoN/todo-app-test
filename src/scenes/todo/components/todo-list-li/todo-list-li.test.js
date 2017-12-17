import React from "react";
import { shallow } from "enzyme";
import TodoListLi from "./index";
import { todoObj } from "../../../../services/mocks/todo";

describe("TodoListLi", () => {
  const wrapper = shallow(<TodoListLi todoObj={todoObj} />);
  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
