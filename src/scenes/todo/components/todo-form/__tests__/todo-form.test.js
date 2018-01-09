import React from "react";
import { shallow, mount } from "enzyme";
import TodoForm from "../index";

describe("TodoForm", () => {
	let onSubmit, wrapper, wrapperMounted, customPreventDefault;
	beforeEach(() => {
		customPreventDefault = {
			preventDefault: () => console.log("preventDefault")
		};
		onSubmit = jest.fn();
		wrapper = shallow(<TodoForm onSubmit={onSubmit} />);
		wrapperMounted = mount(<TodoForm onSubmit={onSubmit} />);
	});

	it("matches snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("runs onInputChange on input change", () => {
		// onInputChange is an own method -> this.onInputChange
		wrapperMounted.instance().onInputChange = jest.fn();
		wrapperMounted.instance().forceUpdate();
		wrapperMounted.find("input").simulate("change");
		expect(wrapperMounted.instance().onInputChange).toBeCalled();
	});

	it("runs handleSubmit on form submit", () => {
		wrapper.instance().handleSubmit = jest.fn();
		wrapper.simulate("submit", customPreventDefault);
		expect(wrapper.instance().handleSubmit).toBeCalled();
	});

	it("runs handleSubmit on click submit button", () => {
		wrapperMounted.instance().handleSubmit = jest.fn();
		wrapperMounted.instance().forceUpdate();
		const todoSubmitButton = wrapperMounted.find("button");
		todoSubmitButton.simulate("click");
		expect(wrapperMounted.instance().handleSubmit).toBeCalled();
	});

	// for handleSubmit
	// to check if this.props.onSubmit is called
	// when read state is disabled this runs fine
	// it("calls this.props.onSubmit on handleSubmit", () => {
	// 	const todoSubmitButton = wrapperMounted.find("button");
	// 	todoSubmitButton.simulate("click");
	// 	expect(onSubmit).toBeCalled();
	// });

	// when read state is enabled... :///
	it("calls this.props.onSubmit on handleSubmit if state.value is correct", () => {
		wrapper.setState({
			value: "poop"
		});
		wrapper.instance().handleSubmit();
		expect(onSubmit).toBeCalled();
	});

	it("does NOT call this.props.onSubmit on handleSubmit if state.value is incorrect", () => {
		wrapper.setState({
			value: "noob"
		});
		wrapper.instance().handleSubmit();
		expect(onSubmit).toHaveBeenCalledTimes(0);
	});

	// it("runs this.props.onSubmit if state.value is correct", () => {
	// 	wrapper.instance().handleSubmit = jest.fn();
	// 	wrapper.instance().forceUpdate();
	// 	wrapper.instance().handleSubmit();
	// 	wrapper.setState({
	// 		value: "poop"
	// 	});
	// 	// expect(onSubmit).toBeCalled();
	// });

	// it("calls this.props.onSubmit when state.value is correct", () => {
	// 	wrapperMounted.setState({
	// 		value: "poop"
	// 	});
	// 	expect(wrapperMounted.state().value).toBe("poop");
	// });
});
