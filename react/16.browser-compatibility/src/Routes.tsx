import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import CssMath from "./components/CssMath";
import ObjectEntries from "./components/ObjectEntries";
import CssFontVariant from "./components/CssFontVariant";

export default class Routes extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/css-math" component={CssMath} />
        <Route exact path="/object-entries" component={ObjectEntries} />
        <Route exact path="/css-font-variant-numeric" component={CssFontVariant} />
      </Switch>
    );
  }
}
