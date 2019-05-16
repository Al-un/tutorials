import React from "react";
import TodosContainer from "../containers/Todos";

export default class Todos extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <h2>TODOs</h2>
        <p>
          Find below all the todos ordered by creation date. To add todo, go to
          the add todo page
        </p>
        <TodosContainer />
      </div>
    );
  }
}
