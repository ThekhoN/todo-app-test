import TodoForm from "../../index";

export default {
  component: TodoForm,
  props: {
    onSubmit: e => {
      e.preventDefault();
      console.log("TodoForm running onSubmit...");
    }
  }
};
