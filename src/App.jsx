import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';

export default () => (
  <Switch>
    <Route key="0" exact path="/" component={Main} />
    <Route key="1" exact path="/dominican" component={Main} />
    <Route key="2" exact path="/turkey" component={Main} />
  </Switch>
);
