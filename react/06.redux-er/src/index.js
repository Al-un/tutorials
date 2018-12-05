import 'bootstrap/dist/css/bootstrap.min.css'; // https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store';
import App from './js/components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// import store from './js/store/index';
// import { addArticle } from './js/actions/index';

// window.store = store;
// window.addArticle = addArticle;
