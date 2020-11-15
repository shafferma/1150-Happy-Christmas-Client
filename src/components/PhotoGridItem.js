import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { ApiProvider } from "../utils/ApiProvider";

function PhotoGridItem(props, context) {
  const { photo } = props;

  function addFavorite() {
    ApiProvider.delete(`/favorite/${photo.id}`)
    .then((response) => {
        console.log(response.data)
    });
  }

  return (
    <div>
      <Button type="submit" onClick={addFavorite}>
        Favorite
      </Button>
    </div>
  );
}

export default AppContainer;
