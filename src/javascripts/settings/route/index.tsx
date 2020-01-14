import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

// pages
import Home from '../../pages/home';
import NoMatch from '../../pages/no-match';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  );
}
