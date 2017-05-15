import React from 'react';
// import package
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'mobx-react';
// import relative path
import Home from './Home';
import NotFound from './NotFound';
import store from '../mobx/stores';

injectTapEventPlugin();

// add router key to fix this issue
// https://github.com/reactjs/react-router-redux/issues/179#issuecomment-275576250
const Main = () => (
  <Provider {...store}>
    <MuiThemeProvider>
      <Router key={Math.random()} history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default Main;
