import React from "react";
import { shallow, mount } from "enzyme";
import AddTodoButton from "./index";

describe("AddTodoButton", () => {
  let wrapper, onClick, labelText;
  beforeEach(() => {
    onClick = jest.fn();
    labelText = "Add Todo";
    wrapper = shallow(
      <AddTodoButton onClick={onClick} labelText={labelText} />
    );
  });
  it("snapshots correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("runs onClick on click", () => {
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toEqual(1);
  });
  it("renders button labelText correctly", () => {
    expect(wrapper.text()).toEqual(labelText);
  });
});
