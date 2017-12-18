import TodoInput from "../index";

export default {
  component: TodoInput,
  props: {
    value: "",
    onChange: e => {
      const value = e.target.value;
      console.log(`User text input: ${value}`);
    }
  }
};
