import React from "react";
import TodoFormContainer from "../containers/TodosForm";

export default class Todos extends React.Component {
  render() {
    return (
      <div>
        <h2>New todo</h2>
        <p>Add a TODO with the form below</p>
        <TodoFormContainer />
      </div>
    );
  }
}
