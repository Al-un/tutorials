import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Content from './components/Content';


const myTheme = {
  primary: 'darkcyan',
  secondary: 'mediumseagreen'
};

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={myTheme}>
          <Content></Content>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
