import React, { Component } from 'react'


import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from "./pages/SingleRoom";
import Error from './pages/Error';

import { Route, Switch} from 'react-router-dom';

import './styles/main.css'

import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}
