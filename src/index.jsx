import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'unstated';
import './assets/style/reset.css';
import './assets/style/fonts.css';
import App from './App';

ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
