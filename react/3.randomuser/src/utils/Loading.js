import React, { Component } from 'react';
import logo from './react_logo.svg';
import './Loading.css';

export default class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <img src={logo} className="Loading-logo" alt="loading" />
        <span>{this.props.value}</span>
      </div>
    );
  }
}

Loading.defaultProps = {
  value: 'Loading'
};
