import React, { useState, useEffect } from "react";
import PhotoUpload from "./PhotoUpload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";


// TODO: edit button display on hover with photo (your photo)

function EditPhotoButton(props) {
  const [showUpload, setShowUpload] = useState(false);

  const openUpload = () => setShowUpload(true);
  const closeUpload = () => setShowUpload(false);

  return (
    <button  className="EditPhotoButton" onClick={openUpload}>
      <FontAwesomeIcon icon={faEdit} />
      <PhotoUpload photo={props.photo} open={showUpload} close={closeUpload} />
      
    </button>
  );
}
export default EditPhotoButton;
