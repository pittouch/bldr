import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "../src/screens/home";
import Notfound from "../src/screens/notfound";

import "./scss/app.scss";

export default () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" render={() => <Index />} />
      <Route
        path="/users/:id"
        render={({ match }) => <Index modal match={match} />}
      />
      <Route component={() => <Notfound />} />
    </Switch>
  </Router>
);
