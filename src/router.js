import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./pages/app";
import Login from "./pages/login";
import Home from "./pages/home";
import Antd from "./pages/antd";
export default function IRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/antd" component={Antd}></Route>
      </Switch>
    </Router>
  );
}
