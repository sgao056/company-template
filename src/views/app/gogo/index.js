import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Dashboard = React.lazy(() =>
  import('./dashboard')
);

const Inventory = React.lazy(() =>
  import('./inventory')
);
const Holders = React.lazy(() =>
  import('./holders')
);
const Rewards = React.lazy(() =>
  import('./rewards')
);
const Portal = React.lazy(() =>
  import('./portal')
);
const Transactions = React.lazy(() =>
  import('./transactions')
);

const MetaData = React.lazy(() =>
  import('./meta-data')
);

const Gogo = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/portal`} />
      <Route
        path={`${match.url}/dashboard`}
        render={(props) => <Dashboard {...props} />}
      />
      <Route
        path={`${match.url}/inventory`}
        render={(props) => <Inventory {...props} />}
      />
      <Route
        path={`${match.url}/holders`}
        render={(props) => <Holders {...props} />}
      />
      <Route
        path={`${match.url}/rewards`}
        render={(props) => <Rewards {...props} />}
      />
      <Route
        path={`${match.url}/portal`}
        render={(props) => <Portal {...props} />}
      />
      <Route
        path={`${match.url}/transactions`}
        render={(props) => <Transactions {...props} />}
      />
      <Route
        path={`${match.url}/meta-data`}
        render={(props) => <MetaData {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Gogo;
