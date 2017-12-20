// only snapshots
import React from "react";
import fixture from "./__fixtures__";
import { shallow } from "enzyme";
import TodoForm from "./index";

describe("TodoForm", () => {
  let onSubmit, wrapper;
  beforeEach(() => {
    onSubmit = fixture.props.onSubmit;
  });

  it("matches snapshot", () => {
    wrapper = shallow(<TodoForm onSubmit={onSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });
});

// normal tests using Jest & Enzyme
/*
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

  //  NOT testing again because they have been unit test at their component levels

  // it("runs onSubmit on click of TodoSubmitButton", () => {
  //   const todoSubmitButton = wrapperMounted.find("button");
  //   todoSubmitButton.simulate("click");
  //   expect(onSubmit).toBeCalled();
  // });

  // it("onInputChange", () => {
  //   wrapperMounted.instance().onInputChange = jest.fn();
  //   wrapperMounted.instance().forceUpdate();
  //   wrapperMounted.find("input.todo-input").simulate("change");
  //   expect(wrapperMounted.instance().onInputChange).toBeCalled();
  // });
});
*/
