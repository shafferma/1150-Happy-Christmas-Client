import React, { useEffect, useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "styles/HomePage.scss"
import PhotoGrid from "components/PhotoGrid"

const HomePage = (props) => {

  

  return (
    <Container>
      <div id="main">
        <h1 className="title">Happy Christmas</h1>
        {/* <p className="sub-title">It's a wonderful world. Go decorating.</p> */}
        <PhotoGrid />
      </div>
    </Container>
  );
};

export default HomePage;
