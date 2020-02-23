import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from "./component/Navigation/Navigation";
import Home from "./component/Home";
import About from "./component/About/About";
import Story from "./component/Story/Story";
import Tours from "./component/Tours/Tours";
import Default from "./component/Default";
import WOW from 'wowjs';


class App extends Component {
  componentDidMount(){
    new WOW.WOW().init();
};
 
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/story" component={Story} />
          <Route path="/tours" component={Tours}/>
          <Route path="/about" component={About} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }

}

export default App;


