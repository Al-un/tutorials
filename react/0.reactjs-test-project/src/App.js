import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plop from './Plop';
import Pouet from './Pouet';
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {

  // https://reactjs.org/docs/state-and-lifecycle.html
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date()
    };
  }

  incrementCount() {
    // http://lucybain.com/blog/2016/react-state-vs-pros/
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    });
  }

  decrementCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count - 1 }
    });
  }

  render() {

    let appStyle = {
      display: 'flex',
      height: '100%'
    }

    let appHeader = {
      width: '100%',
      background: '#222',
      color: 'white',
      padding: '10px'
    }

    let navStyle = {
      width: '20%',
      background: 'teal'
    }

    let navList = {
      listStyleType: 'none',
      margin: 0,
      padding: 0
    }

    let navElem = {
      borderBottom: '1px dotted black'
    }

    // seriously, WTF... I just need a **** ul > li:first-child
    let navFirstElement = {
      borderTop: '1px dotted black',
      borderBottom: '1px dotted black',
    }

    let navLink = {
      textAlign: 'left',
      textIndent: '1em',
      display: 'block',
      padding: '10px',
    }

    let logoStyle = {
      display: 'block',
      margin: 'auto'
    }

    let content = {
      flex: 1,
      background: 'powderblue'
    }

    // using props: {this.props.title}
    return (
      <Router>
        <div className="App" style={appStyle}>

          <nav style={navStyle}>
            <img src={logo} className="App-logo" alt="logo" style={logoStyle} />

            <ul style={navList}>
              <li style={navFirstElement}><Link to={'/'} style={navLink} className="navLink">Home</Link></li>
              <li style={navElem}><Link to={'/plop'} style={navLink} className="navLink">Plop</Link></li>
            </ul>

            <p className="App-intro">
              {this.state.date.toLocaleString()} >  Currently counting: {this.state.count} <br />
              <button type="button" onClick={() => this.incrementCount()}>Pouet!</button>
              <button type="button" onClick={() => this.decrementCount()}>Anti-Pouet!</button>
            </p>

          </nav>

          <div style={content}>
            <header style={appHeader}>
              <h1 className="App-title">{this.props.title}</h1>
            </header>

            <Switch>
              <Route exact path='/' component={Pouet} />
              <Route exact path='/plop' component={Plop} />
            </Switch>

          </div>


        </div>
      </Router>
    );
  }
}

export default App;
