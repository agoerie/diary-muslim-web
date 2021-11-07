import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import TermPage from "./pages/term";
import PrivacyPage from "./pages/privacy";

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/term" component={TermPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
      </Switch>
    </>
  </Router>
);

export default App;
