import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { TestComponent } from '../components';

const Routes = () => {
  return (
    <Switch>
      <Redirect from={'/'} exact={true} to={'home'} />
      <Route path={'/home'} component={TestComponent} />
    </Switch>
  );
};

export default Routes;
