import React from "react";
import {Container} from 'reactstrap';
import PhotoGrid from 'components/PhotoGrid'
import UserTable from 'components/UserTable'

const AdminPage = (props) => {

  return (
    <Container>
      <h1>
          Admin
      </h1>

      <h2>Users</h2>
      <UserTable />

      <h2>Photos</h2>
      <PhotoGrid />

    </Container>
  );
};

export default AdminPage;