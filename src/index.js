import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import About from "./About";
import Skills from "./Skills";

const App = () => (
  <div>
    /*<nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/about">About Me</Link>
      {"  "}
      <Link to="/skills">Skills</Link>
    </nav>*/
    <div>
      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
    </div>
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
