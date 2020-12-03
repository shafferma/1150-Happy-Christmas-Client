import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
// import { createUser, updateUser } from "data/users";
import { useToasts } from "react-toast-notifications";

function UserForm(props, context) {
    // const editUser = props.user.username || false;
    // const [username, setUsername] = useState(editUser.name || "");
    // const history = useHistory();
    const { addToast } = useToasts()

    return (
        <div>
          {/* <Modal isOpen={props.open}>
      <ModalHeader>
        <span>Upload Photo</span>
        <Button color="dark" onClick={props.close}>
          <span>x</span>
        </Button>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={(event) => setName(event.target.value)}
              value={name}
              id="name"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              id="username"
            ></Input>
          </FormGroup>

          {!editPhoto ? (
            <FormGroup>
              <Label htmlFor="photo">Photo</Label>
              <Input
                type="file"
                onChange={handlePhoto}
                filename={uploadedFile}
                id="photo"
                accept="image/png, image/jpeg"
              ></Input>
              <img src={photo} />
            </FormGroup>
          ) : (
            <img src={editPhoto.url} />
          )}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit} type="submit">
          {editPhoto ? "Update" : "Upload"}
        </Button>
      </ModalFooter>
    </Modal> */}
        </div>
    )
}
export default UserForm;

// going to be a modal... mimic the PhotoUpload modal logic
// need ability to edit basic user info
// fname, lname, email, username
// need ability to set admin true/false

