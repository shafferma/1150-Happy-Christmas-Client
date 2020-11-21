import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "styles/HomePage.css"
const photo = require('styles/assets/company-tree.JPG')

const HomePage = () => {

  // const [str, setStr] = useState('')

  // const canvas = document.createElement('canvas')
  // const context = canvas.getContext('2d')
  // const img = new Image()

  // img.onload = function() {

  //   canvas.height = img.height
  //   canvas.width = img.width
    
  //   context.drawImage(img, 0, 0)
  //   const str = canvas.toDataURL('image/JPG', '')
  //   console.info({str})
  //   setStr(str)
  // }

  // img.src = photo

  return (
    <Container>
      <div id="main">
        <h1 className="title">Happy Christmas</h1>
        <p className="sub-title">It's a wonderful world. Go decorating.</p>
      </div>
      <div>
        {/* photo grid display */}
        {'sefsfsef'}
      </div>
    </Container>
  );
};

export default HomePage;
