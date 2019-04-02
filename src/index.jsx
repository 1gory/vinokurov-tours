import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'normalize.css';
import './assets/style/reset.css';
import './assets/style/fonts.css';
import { Provider } from 'unstated';
import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
