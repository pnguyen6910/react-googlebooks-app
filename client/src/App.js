import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import match from "./pages//match";
import Search from "./pages/search";
import Saved from "./pages/saved";
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/match" component={match} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
