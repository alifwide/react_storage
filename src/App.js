import logo from './logo.svg';
import './App.css';
import React from 'react';
//import component
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"

import {Switch, Route} from "react-router-dom"

import beranda from "./pages/beranda"
import kalender from "./pages/kalender"
import gallery from "./pages/gallery"
import olshop from './pages/olshop';
import Cart from './pages/cart';

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Jumbotron/>
          <Switch>
              <Route exact path="/" component={beranda} />
              <Route path="/kalender" component={kalender} />
              <Route path="/gallery" component={gallery} />
              <Route path="/olshop" component={olshop} />
              <Route path="/cart" component={Cart}/>
            </Switch>
      </div>
    )
  }
}

export default App;
