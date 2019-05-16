import React from "react";
// import { NavLink, HashRouter, Router, BrowserRouter } from "react-router-dom";
import { NavLink, BrowserRouter } from "react-router-dom";

import "./App.css";
// import history from "./routes/history";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./store/configureStore";

const App: React.FC = (): JSX.Element => {
  // const basename = "/frontend";

  return (
    <div className="App">
      <header className="App-header">some header here</header>

      <main className="container">
        <img
          src="https://hisouten.koumakan.jp/images/4/40/Swr-portrait-yuyuko.png"
          title="Yuyuko"
        />
        <Provider store={store}>
          <BrowserRouter>
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
          </BrowserRouter>
        </Provider>
      </main>
    </div>
  );
};

export default App;
