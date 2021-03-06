import React from "react";
// import { Button } from "reactstrap";

function Grid(props, context) {
  const GridItem = props.component

  function generateGridItems() {
    return props?.items?.map((value, index) => {
      return (
        <GridItem
          refetch={props.refetch || null}
          item={value}
          key={`grid-item-${index}`} 
          className="GridItem"
         />
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
