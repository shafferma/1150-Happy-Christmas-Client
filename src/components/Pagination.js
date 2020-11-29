import React, { useState } from "react";
import { Button } from "reactstrap";

function Pagination(props) {

  return (
    <div className="Pagination">
      <Button disabled={props.prevDisabled} onClick={props.prev}>&lt; Prev</Button>
      <span>
          Total Pages: {props.totalPages}
      </span>
      <span>
          Items Per Page: {props.itemsPerPage}
      </span>
      <span>
        Page: {props.page}
      </span>
      <Button disabled={props.nextDisabled} onClick={props.next}>Next &gt;</Button>
    </div>
  );
}

export default Pagination;
