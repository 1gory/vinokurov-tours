import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import data from './data';

export default () => (
  <Switch>
    <Route
      key="0"
      exact
      path="/"
      render={props => <Main {...props} data={data[0]} />}
    />
    <Route
      key="2"
      exact
      path="/turkey"
      render={props => <Main {...props} data={data[1]} />}
    />
    <Route
      key="1"
      exact
      path="/russia"
      render={props => <Main {...props} data={data[2]} />}
    />
  </Switch>
);
