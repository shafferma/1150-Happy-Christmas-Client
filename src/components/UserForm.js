import React, { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";
import { useAuth } from "utils/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { useToasts } from "react-toast-notifications";
import { registerUser, updateUser } from "data/users";
import { useDataRefresh } from "utils/DataRefreshProvider";

// checks if string has one special character or one number
const validatePassword = RegExp("((?=.*?[0-9]).*|(?=.*?[#?!@$%^&*-]).*)");

const UserForm = (props) => {
  const [isCreating, setIsCreating] = useState(!!props?.user);
  const [showPassword, setShowPassword] = useState(!!props?.showPassword || false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const history = useHistory();
  const { addToast } = useToasts()
  const auth = useAuth()
  const { userRefresh } = useDataRefresh()

  // prefill form if user prop is passed
  useEffect(() => {
    if (props?.user) {
      setIsCreating(false)
      setEmail(props.user.email || '')
      setFirstname(props.user.firstname || '')
      setLastname(props.user.lastname || '')
      setAdmin(props.user.admin || false)
    } else {
      setIsCreating(true)
    }
  }, [props?.user])

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setFirstname("");
    setLastname("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // if fields not filled out, stop
      if ((isCreating && !username) || !email || (showPassword && !password)) throw "Please fill out all fields";

      // if password is too small, stop
      if (showPassword && (password.length < 5 || !validatePassword.test(password)))
        throw "Password must be 5 or more characters and include 1 number and/or special character";

      // if username does not have 4 or more characters
      if (isCreating && username.length < 4)
        // || !validatePassword.test(password)
        throw "Username must be 4 or more characters";

      // if password and passwordConfirm are not the same, stop
      if (showPassword && (password !== passwordConfirm)) throw "Passwords do not match";

      // everything passes, submit data
      let response = undefined

      if (isCreating) {
        response = await registerUser({
          username,
          email,
          firstname,
          lastname,
          password,
        })
      } else {
        response = await updateUser(props?.user?.username, {
          email,
          firstname,
          lastname,
          ...(auth.user.admin ? { admin } : {}),
          ...(showPassword ? { password } : {})
        })
      }
      
      const message = isCreating ? 'Account created, logging in.' : 'Account updataed.';
      addToast(message, { appearance: 'success' })
      resetForm();

      if (isCreating) {
        auth.updateToken(response.sessionToken, response.user);
        props.close()
        history.push("/homepage");
      } else {
        props.close()
        userRefresh.trigger()
      }


    } catch (error) {
      console.log('UserForm submit error', { error })
      addToast(error?.response?.data?.error || 'Error Submitting Form', { appearance: 'error' })
    }
  };

  return (
      <Modal isOpen={props.open}>
        <ModalHeader>
          <span>{ isCreating ? 'Welcome to Happy Christmas!' : 'Edit Account' }</span>
          <Button color="faded" onClick={props.close}>
            <span>
              <FontAwesomeIcon icon={faTimesCircle} />
            </span>
          </Button>
        </ModalHeader>
        <ModalBody>
            <Form>
            {isCreating ? (
              <FormGroup>
                <Label htmlFor="registerUsername">Username</Label>
                <Input
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                  id="registerUsername"
                ></Input>
              </FormGroup>
            ) : null}
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
              {isCreating ? (
                <>
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
                </>
              ) : null}
              {auth?.user?.admin ? (
                <FormGroup check>
                  <Label check>
                    <Input 
                      type="checkbox" 
                      onChange={(event) => setAdmin(!admin)}
                      checked={admin ? 'checked' : ''}
                    />{' '}
                    Admin
                  </Label>
                </FormGroup>
              ) : null}
              </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit} type="submit">
            {isCreating ? 'Create' : 'Update'} Account
          </Button>
        </ModalFooter>
      </Modal>
  );
};

export default UserForm;
