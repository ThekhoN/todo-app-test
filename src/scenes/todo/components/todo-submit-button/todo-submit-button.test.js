import React from "react";
import { shallow } from "enzyme";
import AddTodoButton from "./index";

describe("AddTodoButton", () => {
  let wrapper, onClick;
  beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(<AddTodoButton onClick={onClick} />);
  });
  it("snapshots correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("runs onClick on click", () => {
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toEqual(1);
    // same as
    // expect(onClick).toBeCalled();
  });
});
