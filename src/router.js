import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./pages/app";
import Login from "./pages/login";
import Home from "./pages/home";
<<<<<<< HEAD
import Antd from "./pages/antd";
=======
>>>>>>> ace6724ef7be5223bb12aba8adb11da7533053cb

export default function IRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
<<<<<<< HEAD
        <Route path="/antd" component={Antd}></Route>
=======
>>>>>>> ace6724ef7be5223bb12aba8adb11da7533053cb
      </Switch>
    </Router>
  );
}
