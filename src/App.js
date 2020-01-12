import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/app.scss";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Imprint from "./components/imprint";
import Universes from "./components/universes";
import Stars from "./components/stars";
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
        <Navbar />
        </Switch>
       
        <Switch>
        <Route exact path="/imprint" component={Imprint} />
        <Route exact path="/stars" component={Stars} />
        <Route exact path="/universes" component={Universes} />
        </Switch>
      </div>
    );
  }
}

export default App;
