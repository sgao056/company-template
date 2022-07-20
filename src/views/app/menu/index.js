import React, { Suspense } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

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
const Updates = React.lazy(() =>
  import('./updates')
);

const MetaData = React.lazy(() =>
  import('./meta-data')
);

const CreateNFT = React.lazy(() => 
  import('./inventory-page/createNFT')
);
const NewCommunity = React.lazy(() => 
  import('../new-community')
);

const Gogo = () => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from="/app" to="/app/dashboard"/>
      <Route
        path="/app/dashboard"
        render={() => <Dashboard />}
      />
      <Route
        exact
        path="/app/inventory"
        render={() => <Inventory  />}
      />
      <Route
        path="/app/holders"
        render={() => <Holders  />}
      />
      <Route
        path="/app/rewards"
        render={() => <Rewards  />}
      />
      <Route
        path="/app/portal"
        render={() => <Portal  />}
      />
      <Route
        path="/app/updates"
        render={() => <Updates  />}
      />
      <Route
        path="/app/meta-data"
        render={() => <MetaData  />}
      />
      <Route
        path="/app/inventory/createNFT"
        render={() => <CreateNFT/>}
      />
      <Route
        path="/app/new-community"
        render={() => <NewCommunity />}
      />
    </Switch>
  </Suspense>
);
export default withRouter(Gogo);
