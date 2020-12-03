import React, { useState } from "react";
import UserForm from "./UserForm";

function EditUserButton(props) {
  const [showUpload, setShowUpload] = useState(false);

  const openUpload = () => setShowUpload(true);
  const closeUpload = () => setShowUpload(false);

  return (
    <div className="EditUserButton">
      <button onClick={openUpload}>Edit</button>
      <UserForm 
        user={props.user} 
        open={showUpload} 
        close={closeUpload} 
      />
    </div>
  );
}
export default EditUserButton;
