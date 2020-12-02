import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Snowman from "components/Snowman";
import ApiProvider from "utils/ApiProvider";
import SnowFall from "components/SnowFall";
import { useAuth } from "utils/AuthProvider";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const auth = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault();
    ApiProvider.post("/login", { username: username, password: password }).then(
      (response) => {
        auth.updateToken(response.data.sessionToken, response.data.user);
        // direct the user to the home page after login
        history.push("/home");
      }
    );
  };
  return (
    <div className="LoginPage">
      <div className="LoginPage__container">
        <Snowman />
        <div className="LoginForm">
          {/* <h1>Login</h1> */}
          <Form className="Form" onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                value={username}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                value={password}
              />
            </FormGroup>
            <Button  id="loginButton" color="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
      <SnowFall />
    </div>
  );
};

export default Login;
