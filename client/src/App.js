<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Save from "./pages/Save";
import "./App.css";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Save} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Save from './pages/save'
import Home from './pages/home'
import Nav from './components/nav'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Save">
          <Save />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
>>>>>>> b57c040a213cccafe20edb65143e7a13a38dbe2a
