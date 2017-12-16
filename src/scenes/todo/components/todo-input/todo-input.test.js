import React from "react";
import TodoInput from "./index";
import { mount } from "enzyme";

describe("TodoInput", () => {
  let wrapperMounted, onChange;
  beforeEach(() => {
    onChange = jest.fn();
    wrapperMounted = mount(<TodoInput onChange={onChange} />);
  });

  it("snapshots correctly", () => {
    expect(wrapperMounted).toMatchSnapshot();
  });

  it("empty text value by default", () => {
    expect(wrapperMounted.text()).toEqual("");
  });

  it("runs props.onChange on onChange", () => {
    wrapperMounted.simulate("change");
    expect(onChange).toBeCalled();
  });

  /************************************************/
  // TEST FAILED - component focuses on mount
  /************************************************/
  /*
  it("focuses on mount", () => {
    wrapperMounted.instance().autoFocus = jest.fn();
    // wrapperMounted.unmount();
    // wrapperMounted.mount();
    wrapperMounted.instance().forceUpdate();
    wrapperMounted.update();
    expect(wrapperMounted.instance().autoFocus).toBeCalled();
  });

  // it("focuses on mount", () => {
  //   const wrapperMounted = mount(<TodoInput onChange={onChange} />);
  //   const focusedElement = document.activeElement;
  //   // console.log("focusedElement: ", focusedElement);

  //   expect(wrapperMounted.matchesElement(focusedElement)).toEqual(true);
  // });

  // it("has focus attribute", () => {
  //   const wrapperMounted = mount(<TodoInput onChange={onChange} />);
  //   expect(wrapperMounted.props.focus).toBe(true);
  // });
  
  */
});
