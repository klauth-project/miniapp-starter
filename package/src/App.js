import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
// import { defaultTheme, ThemeProvider, CssBaseline } from 'nerv-ui';
// import { Provider } from 'react-redux'
import { Home, SecondScreen } from './components';

export default ({ history }) => {
  return (
    // <Provider>
      // <ThemeProvider theme={defaultTheme}>
        // <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route exact path="/__MODULE__/second" component={SecondScreen} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      // </ThemeProvider>
    // </Provider>
  );
};
