import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import TodoNew from "../pages/TodoNew";
import Todos from "../pages/Todos";

export default class Routes extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/todos/" component={Todos} />
        <Route exact path="/todos/new" component={TodoNew} />
      </Switch>
    );
  }
}
