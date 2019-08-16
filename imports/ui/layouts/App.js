/* eslint-disable import/no-named-default, react/destructuring-assignment */

// import packages
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// import navbar
import Navbar from '../components/Navbar';

// import routes
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import NotFound from '../pages/Not-Found';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import Messenger from '../pages/Messenger';
import Dashboard from '../pages/Dashboard';

// import Spinner
import Spinner from '../components/Spinner';

// import hoc to pass additional props to routes
import PropsRoute from '../pages/PropsRoute';

const App = props => (
  <Router>
    <div>
      <PropsRoute component={Navbar} {...props} />
      {props.loggingIn && <Spinner />}
      <Switch>
        <PropsRoute exact path="/" component={Landing} {...props} />
        <PropsRoute path="/login" component={Login} {...props} />
        <PropsRoute path="/signup" component={Signup} {...props} />
        <PropsRoute exact path="/profile" component={Profile} {...props} />
        <PropsRoute exact path="/profile/:_id" component={Profile} {...props} />
        <PropsRoute exact path="/messenger" component={Messenger} {...props} />
        <PropsRoute exact path="/dashboard" component={Dashboard} {...props} />
        <PropsRoute
          path="/recover-password"
          component={RecoverPassword}
          {...props}
        />
        <PropsRoute
          path="/reset-password/:token"
          component={ResetPassword}
          {...props}
        />
        <PropsRoute component={NotFound} {...props} />
      </Switch>
    </div>
  </Router>
);

App.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  userReady: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const userSub = Meteor.subscribe('user');
  const user = Meteor.user();
  const userReady = userSub.ready() && !!user;
  const loggingIn = Meteor.loggingIn();
  const loggedIn = !loggingIn && userReady;
  return {
    loggingIn,
    userReady,
    loggedIn,
  };
})(App);
