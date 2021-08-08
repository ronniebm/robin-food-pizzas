import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getUsersAndStores } from "../services/pruebaApi";

import FourOFour from "../views/404/FourOFour";
import Listado from "../views/Listado/Listado";
import Login from "../views/Login/Login";

export default function Routes() {
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(()=>{
    getUsersAndStores(setUsers, setStores);
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} users={users}/>
        <Route path="/listado" component={Listado} stores={stores} />
        <Route component={FourOFour} />
      </Switch>
    </Router>
  );
}
