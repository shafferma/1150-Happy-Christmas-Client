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
import "styles/PhotoUpload.css";
import { createPhoto } from "data/photos";

const PhotoUpload = (props) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");

  const resetForm = () => {
    setName("");
    setDescription("");
    setPhoto("");
    // setPasswordConfirm("");
    // setFirstname("");
    // setLastname("");
  };

  const handlePhoto = (event) => {
    const file = event.target.files[0]
    console.info({file})


    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const img = new Image()

    img.onload = function() {
      console.log('load img')

      canvas.height = img.height
      canvas.width = img.width
      context.drawImage(img, 0, 0)
      const str = canvas.toDataURL(file.type, '')
      console.info({str})
      setPhoto(str)
    }

    img.src = file.name
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      createPhoto({
        name,
        description,
        photo
      })
        .then((response) => {
          props.close();
          resetForm();
        })
        .catch((error) => console.log(error));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="upload" role="navigation">
      <Modal isOpen={props.open} id="photo-upload">
        <ModalHeader className="modalHeader">
          <div id="mainTitle">Upload Photos here</div>
          <Button className="closeModal" onClick={props.close}>
            <span>x</span>
          </Button>
        </ModalHeader>
        <ModalBody id="modalBody">
          <Form id="upload">
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  id="name"
                ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                  onChange={(event) => setDescription(event.target.value)}
                  value={description}
                  id="description"
                ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="photo">Photo</Label>
              <Input
                  type="file"
                  onChange={(event) => handlePhoto(event)}
                  value={photo}
                  id="photo"
                ></Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit} type="submit">Upload</Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PhotoUpload;
