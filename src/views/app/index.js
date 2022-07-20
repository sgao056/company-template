import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from 'layout/AppLayout';

const Gogo = React.lazy(() =>
  import(/* webpackChunkName: "viwes-gogo" */ './menu')
);
const SecondMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-second-menu" */ './second-menu')
);

const App = () => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Route
              path="/app"
              render={() => <Gogo />}
            />
            <Route
              path="/app"
              render={() => <SecondMenu />}
            />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
