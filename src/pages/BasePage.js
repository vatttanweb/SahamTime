import React from 'react';
// import { connect } from 'react-redux';
// import { useDispatch } from "react-redux";
import { HashRouter,Switch,Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';
// import Login from '../pages/login';
import Register from '../pages/register';
import { logoutUser } from '../actions/user';
import { useDispatch } from 'react-redux';


// import React from 'react';
// import Layout from '../components/Layout';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import Exchange from '../pages/exchanage/index';
// import Markets from '../pages/markets';
// import Profile from './profile';
// import Wallet from './wallet';
// import Settings from './settings';
import Login from './auth/login';
import Reset from './../modules/auth/resetPassword';
// import OtpVerify from './otp-verify';
// import OtpNumber from './otp-number';
// import Lock from './lock';
// import TermsAndConditions from './terms-and-conditions';
// import NewsDetails from './news-details';
// import Signup from './signup';
import Signup from './../modules/auth/authSignup/signup';
import Opt from './../modules/auth/authSignup/otp';
import Finish from './../modules/auth/authSignup/finish';
import CompleteRegister from './../modules/auth/authSignup/completeRegister';
// import Notfound from './notfound';
import ProtectedRoute from './../router/protectedRoute'; 

const PrivateRoute = ({dispatch, component, ...rest }) => {
  if (!Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
    dispatch(logoutUser());
    return (<Redirect to="/login"/>)
  } else {
    return ( // eslint-disable-line
      <Route {...rest} render={props => (React.createElement(component, props))}/>
      );
    }
  };
  
  
  export default function BasePage() {
  const dispatch = useDispatch() 
  return (
    <>
      {/* <HashRouter> */}
                {/* <Switch>
                    <Route path="/" exact render={() => <Redirect to="/app/main"/>}/>
                    <Route path="/app" exact render={() => <Redirect to="/app/main"/>}/>
                    <PrivateRoute path="/app" dispatch={dispatch} component={LayoutComponent}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/error" exact component={ErrorPage}/>
                    <Route component={ErrorPage}/>
                    <Redirect from="*" to="/app/main/dashboard"/>
                </Switch> */}
        <Switch>
          <ProtectedRoute
            exact
            path={'/dashboard'}
            component={LayoutComponent}
          />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/authSignup/signup">
            <Signup />
          </Route>
          <Route exact path="/authSignup/otp">
            <Opt />
          </Route>
          <Route exact path="/authSignup/completeRegister">
            <CompleteRegister />
          </Route>
          <Route exact path="/authSignup/finish">
            <Finish />
          </Route>
          <Route exact path="/Reset">
            <Reset />
          </Route>
          {/* <Route exact path="/notfound">
            <Notfound />
          </Route> */}
          <Redirect from='/' to={'login'} />
        </Switch>
            {/* </HashRouter> */}
    </>
  );
}