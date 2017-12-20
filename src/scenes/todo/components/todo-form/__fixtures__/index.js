import TodoForm from "../index";

export default {
  component: TodoForm,
  state: {
    value: ""
  },
  props: {
    onSubmit: e => {
      console.log("onSubmit running...");
    },
    handleSubmit: e => console.log("TodoForm: running handleSubmit...")
  }
};
