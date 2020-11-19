import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../styles/HomePage.css"

const HomePage = () => {
  return (
    <Container>
      <div id="main">
        <h1 className="title">Happy Christmas</h1>
        <p className="sub-title">It's a wonderful world. Go decorating.</p>
      </div>
    </Container>
  );
};

export default HomePage;
