import TodoSubmitButton from "../index";

export default {
  component: TodoSubmitButton,
  props: {
    labelText: "Add Todo",
    onClick: e => {
      console.log("TodoSubmitButton was clicked");
    }
  }
};
