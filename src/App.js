import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import TermPage from "./pages/term";
import PrivacyPage from "./pages/privacy";
import AboutPage from "./pages/about";
import TermChallengePage from "./pages/term-challenge";
import TermChallengeAyatPage from "./pages/term-challenge-ayat";
import TermChallengeJuzPage from "./pages/term-challenge-juz";

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/term" component={TermPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/termchallenge" component={TermChallengePage} />
        <Route
          exact
          path="/term-challenge-juz"
          component={TermChallengeJuzPage}
        />
        <Route
          exact
          path="/term-challenge-ayat"
          component={TermChallengeAyatPage}
        />
      </Switch>
    </>
  </Router>
);

export default App;
