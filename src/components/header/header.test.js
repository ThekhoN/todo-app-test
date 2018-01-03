import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header", () => {
  let wrapper,
    title = "Hello World!";
  it("matches snapshot", () => {
    wrapper = shallow(<Header title={title} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly", () => {
    expect(wrapper.contains(<h2>Hello World!</h2>)).toEqual(true);
  });

  if (title === "Elephant in the room....") {
    it("renders correctly", () => {
      expect(wrapper.contains(<h2>Elephant in the room....</h2>)).toEqual(true);
    });
  } else {
    it("renders correctly", () => {
      expect(wrapper.contains(<h2 />)).toEqual(false);
    });
  }
});
