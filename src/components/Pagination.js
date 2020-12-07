import React, { useState } from "react";
import { Button } from "reactstrap";

function Pagination(props) {

  return (
    <div className="Pagination">
      <Button id="previous-btn" disabled={props.prevDisabled} onClick={props.prev}>&lt; Prev</Button>
      {/* <span>
          Total Pages: {props.totalPages}
      </span>
      <span>
          Items Per Page: {props.itemsPerPage}
      </span>
      <span>
        Page: {props.page}
      </span> */}
      <Button id="next-btn"  disabled={props.nextDisabled} onClick={props.next}>Next &gt;</Button>
    </div>
  );
}

export default Pagination;
