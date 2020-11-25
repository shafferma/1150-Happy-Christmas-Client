import React, { useState, useEffect } from "react"; 
import "./App.css";
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

const AUTH = {
  isAuthenticated: false,
};

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setSessionToken(token);
      AUTH.isAuthenticated = true;
    }

    // console.info("use", sessionToken, AUTH);
  }, [sessionToken]);

  const updateToken = (newToken, user) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(user));
    setSessionToken(newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
    AUTH.isAuthenticated = false;
  };

  return (
    <Router>
      <AppContainer>
        <Navbar
          updateToken={updateToken}
          logout={clearToken}
          isLoggedIn={!!sessionToken}
        />
        <Switch>
          <Route path="/login">
            <LoginPage updateToken={updateToken} />
          </Route>
          <Route path="/photos">
            <HomePage />
          </Route>
          <PrivateRoute path="/myportfolio">
            <MyPortfolio />
          </PrivateRoute>
          <Route path="/">
            <HomePage />
            {/* token={sessiontoken} updateToken={updateToken} */}
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  console.info("sessionToken", localStorage.getItem("token"));
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

export default App;
