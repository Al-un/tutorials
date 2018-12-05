import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-icon">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="App-nav">
            <Navigation />
          </div>
        </header>
        <div className="App-content">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
