import React, { useState, useEffect } from "react";
import { deletePhoto } from "data/photos";
import { useToasts } from "react-toast-notifications";
import {useHistory} from "react-router-dom";


function DeletePhotoButton(props) {

  const { addToast } = useToasts()
  const history = useHistory();

  const handleDelete = () => {
    deletePhoto(props.photoId).then((response) => {
      console.log(response)
    });
    addToast('Photo deleted', { appearance: 'success' })

    history.push("/myportfolio");
  };

  return (
    <div className="DeletePhotoButton">
      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
export default DeletePhotoButton;
