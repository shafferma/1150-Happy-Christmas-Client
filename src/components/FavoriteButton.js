import React, { useState } from "react";
import { addFavorite, removeFavorite } from "data/favorites";

/**
 * This comp expects 2 props
 * photoId = the photo id
 * favorite = original data value
 */

function FavoriteButton(props, context) {
  const [favorite, setFavorite] = useState(props.favorite);

  const toggleFavorite = () => {
    // if 'favorite == `false`
    if (!favorite) {
      addFavorite(props.photoId) // attempt to add to favorite
        .then((response) => {
          // after successful add
          setFavorite(true); // update local 'fav' variable to true
        });
      return; // 'return' stops the function, otherwise it would execute 'removeFavorite' below
    }
    removeFavorite(props.photoId).then((response) => {
      setFavorite(false);
    });
  };

  return (
    <div className="FavoriteButton">
      <button onClick={toggleFavorite} className={favorite ? "isFavorite" : ""}>
        {!favorite ? "Add" : "Remove"} Favorite
      </button>
    </div>
  );
}
export default FavoriteButton;
