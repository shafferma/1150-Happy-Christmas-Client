import React, { useState } from "react";
import { addFavorite, removeFavorite } from "data/favorites";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

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
    <button onClick={toggleFavorite} className={`FavoriteButton ${favorite ? "isFavorite" : ""}`}>
      <FontAwesomeIcon icon={!favorite ? faHeartRegular : faHeartSolid} />
    </button>
  );
}
export default FavoriteButton;
