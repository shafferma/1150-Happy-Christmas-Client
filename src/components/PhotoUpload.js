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
  const [uploadedFile, setUploadedFile] = useState('');

  const resetForm = () => {
    setName("");
    setDescription("");
    setPhoto("");
    setUploadedFile('');
  };

  const photoError = (error) => {
    setPhoto('')
    setUploadedFile('')
    alert(error)
  }

  const handlePhoto = (event) => {
    event.preventDefault();
    try {
      const file = event.target.files[0]

      const fileSize = Math.round(file.size/1024)

      // if greater than 5mb
      if (fileSize > 5120) {
        photoError('Photo must be smaller than 5mb.')
      }

      setUploadedFile(file.name)

      const fr = new FileReader()
      fr.onload = () => {
        setPhoto(fr.result);

        const img = new Image();

        img.onload = (e) => {
          const height = e.target.height;
          const width = e.target.width;

          // photo width/height must be smaller than 2,000 pixels
          if (height > 2000 || width > 2000) {
            photoError('Photo width/height must be no greater than 2000 pixels.')
          }
        }

        img.onerror = photoError

        img.src = fr.result;
      }

      fr.onerror = photoError

      fr.readAsDataURL(file)

    } catch (error) {
      photoError(error)
      // throw error
    }
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
                  onChange={handlePhoto}
                  filename={uploadedFile}
                  id="photo"
                  accept="image/png, image/jpeg"
                ></Input>
                <img src={photo} />
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
