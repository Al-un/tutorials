import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Plop from './components/Plop';
import PlopRoot from './components/PlopRoot';
import NotFound from './components/NotFound';
import SubPage from './components/SubPage';
import Redirecter from './components/Redirecter';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/plop" component={PlopRoot} />
          <Route path="/plop/:value" component={Plop} />
          <Route
            path="/plop-val"
            render={() => <Plop value="arbitrary value" />}
          />
          <Route path="/sub" component={SubPage} />
          <Route path="/redirect" component={Redirecter} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}
