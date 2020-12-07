import React from "react";
import { Container} from "reactstrap";
import PhotoGrid from "components/PhotoGrid"
import { useAuth } from "utils/AuthProvider";

const HomePage = (props) => {

  const auth = useAuth()
  

  return (
    <Container>
      <div id="main">
        <h1 className="title">Happy Christmas</h1>
        <PhotoGrid />
      </div>
    </Container>
  );
};

export default HomePage;
