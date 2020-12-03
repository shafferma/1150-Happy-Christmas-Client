import React, { useState, useEffect } from "react";
import { useAuth } from "utils/AuthProvider";
import DeleteUserButton from "./DeleteUserButton";
import EditUserButton from "./EditUserButton";

function UserGridItem(props) {
  const [user, setUser] = useState(props.item);

  useEffect(() => {
    setUser(props.item);
  }, [props.item]);

  const auth = useAuth();

  return (
    <div className={`UserGridItem ${props.className}`}>
      <p>{user.username}</p>
      {/* <p>{user.firstname}</p>
      <p>{user.lastname}</p> */}
      {/* <p>{user.email}</p> */}
     


      <DeleteUserButton key={`delete-${user.id}`} username={user.username} />
          <EditUserButton key={`edit-${user.id}`} user={user} />
      {/* {auth.admin
        ? ((<DeleteUserButton key={`delete-${user.id}`} userId={user.id} />),
          (<EditUserButton key={`edit-${user.id}`} user={user} />))
        : null} */}
    </div>
  );
}
export default UserGridItem;

/*
  edit button opens user form modal
  delete button just deletes the user

*/
