import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/member" component={Member} />
      </Switch>
    </Router >
  );
}

export default App;
