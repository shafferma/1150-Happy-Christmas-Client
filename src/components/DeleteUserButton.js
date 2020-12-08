import React from "react";
import { useToasts } from "react-toast-notifications";
import {useHistory} from "react-router-dom";
import { deleteUser } from "data/users";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DeleteUserButton(props, { style }) {

  const { addToast } = useToasts()
  const history = useHistory();

  const handleDelete = () => {

    deleteUser(props.username)
      .then((response) => {
        console.log(response)
        addToast('User deleted', { appearance: 'success' })
        history.push("/admin");
      }).catch(error => {
        addToast(error.response.data.error, { appearance: 'error' })
      });
  };

  return (
    <Button style={{ marginLeft: '4px' }} color={'danger'} className="DeleteUserButton" onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
}

export default DeleteUserButton;
