import React from "react";
import { Container} from "reactstrap";
import PhotoGrid from "components/PhotoGrid"

const HomePage = (props) => {

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
