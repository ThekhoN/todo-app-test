import React from "react";
import TodoForm from "./index";
import renderer from "react-test-renderer";
import { shallow, mount, render } from "enzyme";
import TodoInput from "../todo-input";

describe("TodoForm", () => {
  let wrapper, wrapperMounted, onSubmit;
  beforeEach(() => {
    onSubmit = jest.fn();
    wrapper = shallow(<TodoForm onSubmit={onSubmit} />);
    wrapperMounted = mount(<TodoForm onSubmit={onSubmit} />);
  });

  it("snapshots correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("onSubmit runs form submit", () => {
    wrapper.simulate("submit");
    expect(onSubmit).toBeCalled();
  });

  it("runs onSubmit on click of TodoSubmitButton", () => {
    const todoSubmitButton = wrapperMounted.find("button");
    todoSubmitButton.simulate("click");
    expect(onSubmit).toBeCalled();
  });

  it("onInputChange", () => {
    wrapperMounted.instance().onInputChange = jest.fn();
    wrapperMounted.instance().forceUpdate();
    // wrapperMounted.update();
    wrapperMounted.find("input.todo-input").simulate("change");
    expect(wrapperMounted.instance().onInputChange).toBeCalled();
  });
});
