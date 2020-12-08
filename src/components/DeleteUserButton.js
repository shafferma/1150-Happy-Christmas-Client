import React from "react";
import { useToasts } from "react-toast-notifications";
import {useHistory} from "react-router-dom";
import { deleteUser } from "data/users";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDataRefresh } from "utils/DataRefreshProvider";

function DeleteUserButton(props, { style }) {

  const { addToast } = useToasts()
  const history = useHistory();

  const { userRefresh } = useDataRefresh()

  const handleDelete = () => {

    if (window.confirm(`Are you sure you want to delete ${props.username}?`)) {
      deleteUser(props.username)
        .then((response) => {
          console.log(response)
          addToast(`${props.username} deleted`, { appearance: 'success' })
          userRefresh.trigger()
        }).catch(error => {
          addToast(error.response.data.error, { appearance: 'error' })
        });
    }
  }

  return (
    <Button style={{ marginLeft: '4px' }} color={'danger'} className="DeleteUserButton" onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
}

export default DeleteUserButton;
