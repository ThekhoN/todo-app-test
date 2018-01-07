import TodoSubmitButton from "../../index";

export const labelText = "Add Todo";

export default {
  component: TodoSubmitButton,
  props: {
    labelText,
    onClick: e => {
      console.log("TodoSubmitButton was clicked");
    }
  }
};
