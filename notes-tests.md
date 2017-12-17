### Redundant Tests

For an input Component,

```
const TodoInput = () => {
  return (
    <input
      type="text"
      className="todo-input"
      autoFocus
      placeholder="do something..."
    />
  );
};
```

```
 // this is same as a snapshot
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
```

### Test Component's own Methods (resorting to forceUpdate())

Form Component

```
class TodoForm extends Component {
  constructor() {
    super();
    this.mockOnSubmit = this.mockOnSubmit.bind(this);
  }
  mockOnSubmit() {
    console.log("something is doing....");
  }
  onInputChange() {}
  render() {
    const { onSubmit } = this.props;
    return (
      <form className="todo-form" onSubmit={this.mockOnSubmit}>
      </form>
    );
  }
}
```

Test,

```
  it("runs this.mockOnSubmit on submit", () => {
    let wrapper = shallow(<TodoForm onSubmit={onSubmit} />);
    wrapper.instance().mockOnSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.update();
    wrapper.simulate("submit");
    expect(wrapper.instance().mockOnSubmit).toBeCalled();
  });
```

### Deliberately invoking instance methods and using "prototype" instead of "instance()"

Input Component,

```
class TodoInput extends Component {
  constructor() {
    super();
    this.autoFocus = this.autoFocus.bind(this);
  }
  autoFocus() {
    this.inputElem.focus();
  }
  componentDidMount() {
    this.autoFocus();
  }
  render() {
    const { onChange } = this.props;
    return (
      <input
        type="text"
        className="todo-input"
        ref={input => (this.inputElem = input)}
        placeholder="do something..."
        onChange={onChange}
      />
    );
  }
}
```

Tests,

```
// feels forced - WRONG ? we are deliberately calling the methods
  it("focuses on mount", () => {
    const wrapperMounted = mount(<TodoInput onChange={onChange} />);
    wrapperMounted.instance().componentDidMount = jest.fn();
    wrapperMounted.instance().autoFocus = jest.fn();
    wrapperMounted.instance().componentDidMount();
    wrapperMounted.instance().autoFocus();
    expect(wrapperMounted.instance().componentDidMount).toBeCalled();
    expect(wrapperMounted.instance().autoFocus).toBeCalled();
  });

  // correct
  it("focuses on mount", () => {
    const spyAutoFocus = jest.spyOn(TodoInput.prototype, "autoFocus");
    const wrapperMounted = mount(<TodoInput onChange={onChange} />);
    expect(spyAutoFocus).toHaveBeenCalled();
  });
```

### Reading the props directly from a mounted/shallowed Component

```
  // accessing props only works with Class Components(passing the props to THE COMPONENT NOTot to the html element/node)
  const wrapperMounted = mount(
      <TodoInput defaultValue="stop" onChange={onChange} />
    );
 console.log(wrapperMounted.instance().props.defaultValue === "stop");
```

## REMEMBER

* Ensure the Component is Unit-testable else break it

* JUST use snapshots if you just need to check if the html node/element contains html-attributes(autoFocus, data-attributes etc)

* When to use Shallow -> 1 Level

* When to use Mount -> .find(children), using refs
