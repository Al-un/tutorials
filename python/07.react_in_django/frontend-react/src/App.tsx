import React from "react";
import { NavLink, HashRouter } from "react-router-dom";

import "./App.css";
import history from "./routes/history";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./store/configureStore";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">some header here</header>

      <main className="container">
        <Provider store={store}>
          <HashRouter>
            <nav className="navbar">
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
              <NavLink exact activeClassName="active" to="/todos/">
                List todos{" "}
              </NavLink>
              <NavLink exact activeClassName="active" to="/todos/new">
                Add todo{" "}
              </NavLink>
            </nav>

            <Routes />
          </HashRouter>
        </Provider>
      </main>
    </div>
  );
};

export default App;
