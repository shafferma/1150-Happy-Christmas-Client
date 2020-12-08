import React, { useState } from "react";
import { Button } from "reactstrap";
import UserForm from "./UserForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

function EditUserButton(props) {
  const [showUpload, setShowUpload] = useState(false);

  const openUpload = () => setShowUpload(true);
  const closeUpload = () => setShowUpload(false);

  return (
    <Button color={'primary'} className="EditUserButton" onClick={openUpload}>
      <FontAwesomeIcon icon={faEdit} />
      <UserForm
        user={props.user} 
        open={showUpload} 
        close={closeUpload} 
      />
    </Button>
  );
}
export default EditUserButton;
