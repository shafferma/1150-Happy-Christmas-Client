import React from "react";
import { Container } from "reactstrap";
import PhotoGrid from "components/PhotoGrid"
import { useAuth } from "utils/AuthProvider";

const MyPortfolio = () => {
  const auth = useAuth()
  return (
    <Container>
      <div>
        <h1>My photos</h1>
        <PhotoGrid params={{username: auth.user.username}} />

<br/>
        <hr />
<br/>

        <h1>Favorites</h1>
        <PhotoGrid params={{favorites: true}} />
      </div>
    </Container>
  );
};

export default MyPortfolio;
