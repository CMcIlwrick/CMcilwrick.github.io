import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import CV from "./CV";
import Projects from "./Projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Aboutme" component={Aboutme} />
    <Route path="/Contact" component={Contact} />
    <Route path="/CV" component={CV} />
    <Route path="/Projects" component={Projects} />
  </Switch>
);
export default Main;
