import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';

// hydrate(<App data="Mikenzi" />, document.getElementById('app'));
// hydrate(<App data={window.__INIT_DATA__} />, document.getElementById('app'));
hydrate(
  <BrowserRouter>
    <App />
    {/* <App data={window.__INITIAL_DATA__} /> */}
  </BrowserRouter>,
  document.getElementById('app')
);
