import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';

import FourOFour from "../views/404/FourOFour";
import Listado from "../views/Listado/Listado";
import Login from "../views/Login/Login";

export default function Routes() {

  const loggedIn = localStorage.getItem("user");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          { loggedIn ? <Redirect to="/listado" /> : <Login />}
        </Route>
        <Route path="/listado" component={ Listado } />
        <Route component={FourOFour} />
      </Switch>
    </Router>
  );
}
