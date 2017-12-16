import React from "react";
import TodoForm from "./index";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("TodoForm", () => {
  let wrapper, onSubmit;
  beforeEach(() => {
    onSubmit = jest.fn();
    wrapper = shallow(<TodoForm onSubmit={onSubmit} />);
  });

  it("renders a form with class todo-form", () => {
    expect(
      wrapper.contains(<form className="todo-form" onSubmit={onSubmit} />)
    );
  });

  it("onSubmit runs form submit", () => {
    wrapper.simulate("submit");
    expect(onSubmit).toBeCalled();
  });

  it("runs onSubmit on click submit button", () => {
    const submitButton = wrapper.find("button");
    submitButton.simulate("click");
    expect(onSubmit).toBeCalled();
  });
});
