import React from "react";
import { deletePhoto } from "data/photos";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DeletePhotoButton(props) {
  const { addToast } = useToasts();
  const history = useHistory();

  const handleDelete = () => {

    // confirm user wants to delete, else stop function
    if (!window.confirm('Are you sure you want to delete this photo?')) return 

    deletePhoto(props.photoId)
      .then((response) => {
        addToast("Photo deleted", { appearance: "success" });
        history.go(0); // refreshes the page
      })
      .catch((error) => {
        console.log(error)
        addToast(error.response.data.error, { appearance: "error" });
      });
  };

  return (
    <button className="DeleteButton" onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}
export default DeletePhotoButton;
