import React, { useState, useEffect } from "react";
import PhotoUpload from "./PhotoUpload";

function EditPhotoButton(props) {
  const [showUpload, setShowUpload] = useState(false);

  const openUpload = () => setShowUpload(true);
  const closeUpload = () => setShowUpload(false);

  return (
    <div className="EditPhotoButton">
      <button onClick={openUpload}>Edit</button>
      <PhotoUpload 
        photo={props.photo} 
        open={showUpload} 
        close={closeUpload} 
      />
    </div>
  );
}
export default EditPhotoButton;
