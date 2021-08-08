import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import FourOFour from "../views/404/FourOFour";
import Listado from "../views/Listado/Listado";
import Login from "../views/Login/Login";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/listado" component={Listado} />
        <Route component={FourOFour} />
      </Switch>
    </Router>
  );
}
