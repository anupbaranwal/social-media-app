import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import NoPageFound from "./NoPageFound";
import React from "react";
import { Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Post from "./Post";
import User from "./User";
import ToDo from "./ToDo";
import Album from "./Album";

const App = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/posts" component={Post}></Route>
          <Route exact path="/albums" component={Album}></Route>
          <Route exact path="/users" component={User}></Route>
          <Route exact path="/todos" component={ToDo}></Route>
          <Route exact path="/" component={Home}></Route>
          <Redirect from="/home" to="/" />
          <Route component={NoPageFound}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
