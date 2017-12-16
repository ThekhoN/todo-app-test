import React from "react";
import TodoInput from "./index";
import { shallow } from "enzyme";

describe("TodoInput", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoInput />);
  });

  // start with this
  it("renders an input with class todo-input", () => {
    expect(
      wrapper.contains(
        <input
          type="text"
          className="todo-input"
          autoFocus
          placeholder="do something..."
        />
      )
    ).toEqual(true);
  });

  // snapshot
  it("snapshots correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // input.value === ""
  it("empty text value by default", () => {
    expect(wrapper.text()).toEqual("");
  });
});
