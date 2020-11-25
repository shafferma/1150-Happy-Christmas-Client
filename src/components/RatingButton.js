import React, { useState, useEffect } from "react";
import { addRating, removeRating } from "data/ratings";


function RatingButton(props, context) {
  const [rating, setRating] = useState(props.ratings);

  const toggleFavorite = () => {
    
    if (!rating) {
      addRating(props.photoId) // attempt to add to rating
        .then((response) => {
          // after successful add
          setFavorite(true); // update local 'fav' variable to true
        });
      return; // 'return' stops the function, otherwise it would execute 'removeRating' below
    }
    removeRating(props.photoId).then((response) => {
      setRating(false);
    });
  };

  return (
    <div className="RatingButton">
      <button onClick={toggleRating} className={rating ? "isRated" : ""}>
        {!rating ? "Add" : "Remove"} Rating
      </button>
    </div>
  );
}
export default RatingButton;
