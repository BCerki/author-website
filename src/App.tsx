import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Books from "./Components/Books";
import Contact from "./Components/Contact";
import Collage from "./Components/Collage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
