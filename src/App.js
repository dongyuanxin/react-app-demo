import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import axios from "axios";

import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import Navigation from "./components/Navigation"
import TestPanel from "./components/Test"

import UserForm from "./components/UserForm"

const API = "https://api.github.com/users/";

class App extends Component {
  state = {
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(API + user.trim()).then(res => {
      console.log("res is", res)
    }).catch(error => {
      this.setState({
        repos: error.message
      })
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component = {Home} exact/>
            <Route path="/about" component = {About} />
            <Route path="/contact" component = {Contact} />
            <Route component = {NotFound}/>
          </Switch>
          <UserForm getUser = {this.getUser} />
          { this.state.repos 
            ? <p>Msg of state is: {this.state.repos}</p>
            : <p>Please enter your own name</p>}
          <TestPanel content = "i am test panel"/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
