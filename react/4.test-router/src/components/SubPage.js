import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

function SubPage1(props) {
  return (
    <div>
      <h4>SubPage1</h4>
    </div>
  );
}

function SubPage2(props) {
  return (
    <div>
      <h4>SubPage2</h4>
    </div>
  );
}

function SubPageById(props) {
  return (
    <div>
      <h4>SubPage by Id</h4>
      <p>ID: {props.match.params.id}</p>
    </div>
  );
}

export default class SubPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Sub pages</h2>
        <p>Testing nested router</p>
        <ul>
          <li>
            <NavLink to="/sub/1" activeClassName="active-link">
              SubPage1
            </NavLink>
          </li>
          <li>
            <NavLink to="/sub/2" activeClassName="active-link">
              SubPage2
            </NavLink>
          </li>
          <li>
            <NavLink to="/sub/test" activeClassName="active-link">
              SubPage by id: test
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/sub/1" component={SubPage1} />
          <Route path="/sub/2" component={SubPage2} />
          <Route path="/sub/:id" component={SubPageById} />
        </Switch>
      </div>
    );
  }
}
