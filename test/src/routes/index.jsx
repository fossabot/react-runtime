import React from 'react';
import { router } from '@vzhdi/react-runtime';
import PageContext from '../pages/context';

const { Router, Switch, Route, LazilyRoute, Link } = router;

export default () => (
  <Router>
    <div>
      <div>
        <Link to="/context">context</Link>
        <Link to="/i18n">i18n</Link>
      </div>
      <Switch>
        <Route path="/context" component={PageContext} />
        <LazilyRoute path="/i18n" loader={() => import('../pages/i18n')} />
      </Switch>
    </div>
  </Router>
);
