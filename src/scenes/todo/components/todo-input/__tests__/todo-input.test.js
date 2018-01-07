import React from "react";
import TodoInput from "../index";
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

	// good to go for Class Component -> calling this.autoFocus on CDM
	it("calls this.autoFocus on componentDidMount", () => {
		const spyAutoFocus = jest.spyOn(TodoInput.prototype, "autoFocus");
		mount(<TodoInput onChange={onChange} />);
		expect(spyAutoFocus).toHaveBeenCalled();
	});
});
