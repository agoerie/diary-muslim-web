import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import TermPage from "./pages/term";
import PrivacyPage from "./pages/privacy";
import AboutPage from "./pages/about";

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/term" component={TermPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </>
  </Router>
);

export default App;
