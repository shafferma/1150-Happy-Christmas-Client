import React from "react";
import { useToasts } from "react-toast-notifications";
import {useHistory} from "react-router-dom";
import { deleteUser } from "data/users";


function DeleteUserButton(props) {

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
    <div className="DeleteUserButton">
      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default DeleteUserButton;
