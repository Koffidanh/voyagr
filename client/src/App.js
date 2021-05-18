import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import ProtectedRoute from "./auth/protected-route";

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Router>
      <Switch>
        <Route path="/" component={Signup} exact />
        <ProtectedRoute path="/dashboard" component={Dashboard} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router >
  );
}

export default App;
