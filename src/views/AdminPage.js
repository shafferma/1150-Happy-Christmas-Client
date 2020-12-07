import React from "react";
import {Container} from 'reactstrap';
import PhotoGrid from 'components/PhotoGrid'

const AdminPage = (props) => {

  return (
    <Container>
      <h1>
          Admin
      </h1>
      <PhotoGrid />
    </Container>
  );
};

export default AdminPage;