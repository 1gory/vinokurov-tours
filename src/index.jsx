import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import 'normalize.css';
import './assets/style/fonts.css';
import { App } from './App';
import { Provider } from 'unstated';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
