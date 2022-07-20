import React, { Suspense } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

const Holders = React.lazy(() =>
  import('./Holders')
);

const Portal = React.lazy(() =>
  import('./Portal')
);
const NFTWidget = React.lazy(() =>
  import('./NFT-Widget')
);
const Rewards = React.lazy(() =>
  import('./Rewards')
);
const Data = React.lazy(() =>
  import('./Data')
);


const TPViews = () => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from="/user" to="/user/portal"/>
      <Route
        path="/user/portal"
        render={() => <Portal  />}
      />
      <Route
      path="/user/nft-widget"
      render={() => <NFTWidget  />}
      />
      <Route
        path="/user/holders"
        render={() => <Holders  />}
      />
      <Route
        path="/user/rewards"
        render={() => <Rewards  />}
      />
      <Route
        path="/user/data"
        render={() => <Data  />}
      />
    </Switch>
  </Suspense>
);
export default withRouter(TPViews);
