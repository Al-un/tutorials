import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import Routes from "./Routes";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <div className="container">
            <div>Testing browser compatibility</div>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/css-math">CSS Math</NavLink>
              <NavLink to="/object-entries">Object entries</NavLink>
              <NavLink to="/css-font-variant-numeric">Fraction</NavLink>
            </nav>
          </div>
        </header>
        <main className="container">
          <Routes />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
