import React from 'react';
import { router, loadable } from '@vzhdi/react-runtime';
// import PageContext from '../pages/context';

const { Router, Switch, Route, LazilyRoute, Link } = router;

export default () => (
  <Router guid="router">
    <div>
      <div>
        <Link to="/context">context</Link>
        <Link to="/i18n">i18n</Link>
      </div>
      <Switch guid="switch">
        <Route path="/context" component={loadable(() => import('../pages/context'))} />
        <LazilyRoute path="/i18n" loader={() => import('../pages/i18n')} />
      </Switch>
    </div>
  </Router>
);
