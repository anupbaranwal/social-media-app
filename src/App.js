import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import NoPageFound from "./NoPageFound";
import React from "react";
import { Redirect } from "react-router-dom";

const App = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Redirect from="/home" to="/" />
          <Route component={NoPageFound}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
