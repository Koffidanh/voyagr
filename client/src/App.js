import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router >
  );
}

export default App;
