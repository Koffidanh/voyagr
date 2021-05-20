import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Landing from "./pages/Landing";
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
        <Route path="/" component={Landing} exact />
        <ProtectedRoute path="/dashboard" component={Dashboard} exact />
      </Switch>
    </Router >
  );
}

export default App;
