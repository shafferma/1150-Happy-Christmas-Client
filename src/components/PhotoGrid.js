import React, { useState, useEffect } from "react";
// import { Button } from "reactstrap";
import 'styles/Grid.scss';

function Grid(props, context) {
  // const { photo } = props;


  function generateGridItems() {
    return props?.items?.map((value, index) => {
      return (
        <img
         src={value}
         key={`grid-item-${index}`} />
      )
    }) || null
  }

  return (
    <div className="Grid">
      {generateGridItems()}    
      </div>
  );
}

export default Grid;
