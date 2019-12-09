import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import About from "./component/About";
import Story from "./component/Story";
import Tours from "./component/Tours";
import Footer from './component/Footer';
import Default from "./component/Default";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/story" component={Story} />
          <Route path="/tours" component={Tours} />
          <Route path="/about" component={About} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }

}

export default App;


