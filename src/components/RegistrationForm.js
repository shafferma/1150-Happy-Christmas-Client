import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import ApiProvider from "utils/ApiProvider";
import { useHistory } from "react-router-dom";
import "styles/RegistrationForm.css";
import { useAuth } from "utils/AuthProvider";

// checks if string has one special character or one number
const validatePassword = RegExp("((?=.*?[0-9]).*|(?=.*?[#?!@$%^&*-]).*)");

const RegistrationForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  let history = useHistory();

  const auth = useAuth()

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setFirstname("");
    setLastname("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      // if fields not filled out, stop
      if (!username || !email || !password) throw "Please fill out all fields";

      // if password is too small, stop
      if (password.length < 5 || !validatePassword.test(password))
        throw "Password must be 5 or more characters and include 1 number and/or special character";

      // if username does not have 4 or more characters
      if (username.length < 4)
        // || !validatePassword.test(password)
        throw "Username must be 4 or more characters";

      // if password and passwordConfirm are not the same, stop
      if (password !== passwordConfirm) throw "Passwords do not match";

      // everything passes, submit data
      ApiProvider.post("/register", {
        username,
        email,
        password,
        firstname,
        lastname,
      })
        .then((response) => {
          auth.updateToken(response.data.sessionToken, response.data.user);
          props.close();
          resetForm();
          history.push("/homepage");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      alert(error);
    }
  };

  return (
      <Modal isOpen={props.open}>
        <ModalHeader>
          <span>Welcome to Happy Christmas!</span>
          <Button color="danger" onClick={props.close}>
            <span>x</span>
          </Button>
        </ModalHeader>
        <ModalBody>
            <Form>
              <FormGroup>
                <Label htmlFor="registerUsername">Username</Label>
                <Input
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                  id="registerUsername"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  onChange={(event) => setFirstname(event.target.value)}
                  value={firstname}
                  id="firstname"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  onChange={(event) => setLastname(event.target.value)}
                  value={lastname}
                  id="lastname"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="registerEmail">Email</Label>
                <Input
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  id="registerEmail"
                  type="email"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="registerPassword"> Password</Label>
                <Input
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  id="registerPassword"
                  type="password"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="passwordConfirm">Confirm Password</Label>
                <Input
                  onChange={(event) => setPasswordConfirm(event.target.value)}
                  value={passwordConfirm}
                  id="passwordConfirm"
                  type="password"
                ></Input>
              </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit} type="submit">
            Create Account
          </Button>
        </ModalFooter>
      </Modal>
  );
};

export default RegistrationForm;
