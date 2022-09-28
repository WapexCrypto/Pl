import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./Welcome";
import About from "./About";
import Skills from "./Skills";
const axios = require('axios');

const App = () => (
  <div>
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
