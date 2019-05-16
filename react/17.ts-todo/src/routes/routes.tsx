import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import TodoNew from "../todos/pages/TodoNew";
import Todos from "../todos/pages/Todos";

export default class Routes extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/todos/" component={Todos} />
        <Route exact path="/todos/new" component={TodoNew} />
      </Switch>
    );
  }
}
