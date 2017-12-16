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

## REMEMBER

* Ensure the Component is Unit-testable else break it

* When to use Shallow -> 1 Level

* When to use Mount -> .find(children), using refs
