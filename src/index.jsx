import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'normalize.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';
import './assets/style/reset.css';
import './assets/style/fonts.css';
import App from './App';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

ReactDOM.render(
  <Router>
    <Provider>
      <Route component={ScrollToTop} />
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
