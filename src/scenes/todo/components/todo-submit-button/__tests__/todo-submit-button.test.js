import React from "react";
import { shallow, mount } from "enzyme";
import TodoSubmitButton from "../index";
import { labelText } from "./__fixtures__";

describe("TodoSubmitButton", () => {
  let wrapper, onClick;
  beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(
      <TodoSubmitButton onClick={onClick} labelText={labelText} />
    );
  });
  it("matches snapshot", () => {
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
