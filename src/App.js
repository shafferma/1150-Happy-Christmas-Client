import React from "react"; 
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import AppContainer from "./components/AppContainer";
import MyPortfolio from "./views/MyPortfolio";
import AdminPage from "./views/AdminPage";
import { useAuth } from "utils/AuthProvider";

function App() {

  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/photos">
            <HomePage />
          </Route>
          <PrivateRoute path="/myportfolio">
            <MyPortfolio />
          </PrivateRoute>
          <AdminRoute path="/admin">
            <AdminPage />
          </AdminRoute>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function AdminRoute({ children, ...rest }) {

  const userString = localStorage.getItem("user") || false
  const user = JSON.parse(userString) || false
  const isAdmin = user?.admin || false

  return (
    <Route
      {...rest}
      render={({ location }) =>
      isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
