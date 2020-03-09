import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/layouts/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alerts from "./Components/layouts/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./Components/routing/PrivateRoute";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment className='App'>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
