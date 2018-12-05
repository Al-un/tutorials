import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav style={{ display: 'flex' }}>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/plop" activeClassName="active-link">
              Plop
            </NavLink>
          </li>
          <li>
            <NavLink to="/plop/this is a value" activeClassName="active-link">
              Plop with spaced value
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/sub/" activeClassName="active-link">
              Sub page
            </NavLink>
          </li>
          <li>
            <NavLink to="/sub/1" activeClassName="active-link">
              Sub page1
            </NavLink>
          </li>
          <li>
            <NavLink to="/redirect" activeClassName="active-link">
              Redirect
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
