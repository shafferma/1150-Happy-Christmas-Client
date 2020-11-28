import React, { useState, useEffect } from "react";
import { deletePhoto } from "data/photos";

function DeletePhotoButton(props) {
  const handleDelete = () => {
    deletePhoto(props.photoId).then((response) => {
      console.log(response)
    });
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
