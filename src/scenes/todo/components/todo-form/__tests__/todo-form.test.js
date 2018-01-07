import React from "react";
import { shallow, mount } from "enzyme";
import TodoForm from "../index";

describe("TodoForm", () => {
	let onSubmit, wrapper, wrapperMounted;
	beforeEach(() => {
		onSubmit = jest.fn();
		wrapper = shallow(<TodoForm onSubmit={onSubmit} />);
		wrapperMounted = mount(<TodoForm onSubmit={onSubmit} />);
	});

	it("matches snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("runs onSubmit on form submit", () => {
		wrapper.simulate("submit");
		expect(onSubmit).toBeCalled();
	});

	it("runs onSubmit on click submit button", () => {
		const todoSubmitButton = wrapperMounted.find("button");
		todoSubmitButton.simulate("click");
		// onSubmit is props.onSubmit
		expect(onSubmit).toBeCalled();
	});

	it("runs onInputChange on input change", () => {
		// onInputChange is an own method -> this.onInputChange
		wrapperMounted.instance().onInputChange = jest.fn();
		wrapperMounted.instance().forceUpdate();
		wrapperMounted.find("input").simulate("change");
		expect(wrapperMounted.instance().onInputChange).toBeCalled();
	});
});
