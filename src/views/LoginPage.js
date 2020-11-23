import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import "styles/Login.css";
import Snowman from "components/Snowman";
import ApiProvider from "utils/ApiProvider";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    ApiProvider.post("/login", { username: username, password: password }).then(
      (response) => {
        props.updateToken(response.data.sessionToken);
        // direct the user to the home page after login
        history.push("/home");
      }
    );
  };
  return (
    <div id="divMain">
      <div id="snow">
        <Snowman />
        <div id="loginForm">
          {/* <h1>Login</h1> */}
          <Form id="formBody" onSubmit={handleSubmit}>
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
            <Button id="loginButton" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
