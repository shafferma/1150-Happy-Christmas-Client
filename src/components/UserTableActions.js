import React, { useEffect, useState } from "react";
import DeleteUserButton from "./DeleteUserButton";
import EditUserButton from "./EditUserButton";

function UserTableActions(props) {

    const [user, setUser] = useState(props.item)

    useEffect(() => {
        setUser(props.item)
    }, [props.item])

    return (
        <div style={{display: 'flex'}}>
            <EditUserButton user={user} />
            <DeleteUserButton username={user.username} />
        </div>
    )
}

export default UserTableActions