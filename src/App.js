import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';
import ColorSwitcher from './components/common/ColorSwitcher';
import { NotificationContainer } from './components/common/react-notifications';
import { isMultiColorActive } from './constants/defaultValues';
import { getDirection } from './helpers/Utils';

const ViewApp = React.lazy(() =>
  import( './views/app')
);

const ViewError = React.lazy(() =>
  import( './views/error')
);

const ViewPortal = React.lazy(() =>
  import( './views/portal')
);

const ViewChooseService = React.lazy(() =>
  import( './views/TP-pages/ChooseService')
);

const ViewPagesView = React.lazy(() =>
  import( './views/TP-pages/TP-views')
);

const ViewPublishNFT = React.lazy(() =>
  import( './views/TP-pages/Publish-NFT')
);

const ViewNFTList = React.lazy(() =>
  import( './views/TP-pages/NFT-list')
);

class App extends React.Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <>
            <NotificationContainer />
            {isMultiColorActive && <ColorSwitcher />}
            <Suspense fallback={<div className="loading" />}>
              <Router>
                <Switch>
                  <Route
                    path="/app"
                    render={(props) => <ViewApp {...props} />}
                  />
                  <Route
                    path="/user"
                    render={(props) => <ViewPagesView {...props} />}
                  />
                  <Route
                    path="/error"
                    exact
                    render={(props) => <ViewError {...props} />}
                  />
                  <Route
                    path="/portal"
                    exact
                    render={(props) => <ViewPortal {...props} />}
                  />
                  <Route
                    path="/choose-service"
                    exact
                    render={(props) => <ViewChooseService {...props} />}
                  />
                  <Route
                    path="/publish-NFT"
                    exact
                    render={(props) => <ViewPublishNFT {...props} />}
                  />
                  <Route
                    path="/NFT-list"
                    exact
                    render={(props) => <ViewNFTList {...props} />}
                  />
                    <Redirect exact from="/" to="/NFT-list" />
                    <Redirect to="/error" />
                </Switch>
              </Router>
            </Suspense>
          </>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
