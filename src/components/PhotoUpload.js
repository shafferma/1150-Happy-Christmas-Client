import React, { useEffect, useState } from "react";
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
import { createPhoto, updatePhoto } from "data/photos";
import { useToasts } from "react-toast-notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { useDataRefresh } from 'utils/DataRefreshProvider'

const PhotoUpload = (props) => {
  const editPhoto = props.photo || false;
  const [name, setName] = useState(editPhoto.name || "");
  const [description, setDescription] = useState(editPhoto.description || "");
  const [photo, setPhoto] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");
  // const history = useHistory();

  useEffect(() => resetForm(), [props.photo])

  const { addToast } = useToasts()

  const resetForm = () => {
    setName(editPhoto.name || "");
    setDescription(editPhoto.description || "");
    setPhoto("");
    setUploadedFile("");
  };

  const photoError = (error) => {
    setPhoto("");
    setUploadedFile("");
    alert(error);
  };

  const { photoRefresh } = useDataRefresh()

  /**
   * Handle File Upload Event. Runs as soon as the User selects a file to upload (clicks OK)
   */
  const handlePhoto = (event) => {
    // prevent any form submission
    event.preventDefault();

    try {
      // grab the first, and only, file available
      const file = event.target.files[0];

      // we check the file size
      const fileSize = Math.round(file.size / 1024);

      // if the file size is greater than 5mb, throw an error
      if (fileSize > 5120) {
        photoError("Photo must be smaller than 5mb.");
        return;
      }

      setUploadedFile(file.name);

      // create a File Reader, this is to get more info about our file
      const fr = new FileReader();

      // this runs when we use `fr.readAsDataURL(file);`
      fr.onload = () => {

        // save the base64 string to our photo variable
        setPhoto(fr.result);

        // create an Image, not seen by the User
        // we only do this image stuff to ensure the photo is within our width/height constraints
        const img = new Image();

        // when we load the image with a value, set `img.src`, we run this function
        img.onload = (e) => {
          const height = e.target.height;
          const width = e.target.width;

          // photo width/height must be smaller than 2,000 pixels
          if (height > 2000 || width > 2000) {
            photoError(
              "Photo width/height must be no greater than 2000 pixels."
            );
            return;
          }
        };

        img.onerror = photoError;

        // setting src will run the `onload` function above
        img.src = fr.result;
      };

      // handle any error that may occur from loading our file
      fr.onerror = photoError;

      // load the file into the File Reader, causing `onload` to trigger
      // converts the file into a base64 string
      fr.readAsDataURL(file);

    } catch (error) {
      photoError(error);
      // throw error
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = undefined;

      if (!name) throw 'Name required'
      if (!description) throw 'Description required'
      
      
      if (editPhoto) {
        response = await updatePhoto(editPhoto.id, {
          name,
          description,
        });
        addToast('Successfully updated photo', { appearance: 'success' })

      } else {
        if (!photo) throw 'Photo required'
        response = await createPhoto({
          name,
          description,
          photo,
        });
        addToast('Successfully created photo', { appearance: 'success' })
      }
      
      photoRefresh.trigger()
      
      props.close();
      resetForm();

    } catch (error) {
      alert(error, { appearance: 'error' })
    }
  };

  return (
    <Modal isOpen={props.open}>
      <ModalHeader>
        <span>{editPhoto ? "Update" : "Upload"} Photo</span>
        <Button color="faded" onClick={props.close}>
        <span>
              <FontAwesomeIcon icon={faTimesCircle} />
            </span>        </Button>
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
            <Label htmlFor="description">Description</Label>
            <Input
              onChange={(event) => setDescription(event.target.value)}
              value={description}
              id="description"
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
    </Modal>
  );
};

export default PhotoUpload;
