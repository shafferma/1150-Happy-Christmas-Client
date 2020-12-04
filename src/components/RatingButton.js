import React, { useState, useEffect } from "react";
import { addRating, removeRating } from "data/ratings";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';


function RatingButton(props, context) {
  
  const [rating, setRating] = useState(props.rating || 0);

  useEffect(() => {
    setRating(props.rating)
  }, [props.rating])

  const toggleRating = (value) => {
    
    if (value != rating) {
      addRating(props.photoId, value) // attempt to add to rating
        .then((response) => {
          setRating(value);
        });
      return; // 'return' stops the function, otherwise it would execute 'removeRating' below
    }

    removeRating(props.photoId).then((response) => {
      setRating(0);
    });
  };

  return (
    <div className="RatingButton">
      <button onClick={() => toggleRating(1)} className={rating >= 1 ? 'active' : ''}>
        <FontAwesomeIcon icon={rating >= 1 ? faStarSolid : faStarRegular} />
      </button>
      <button onClick={() => toggleRating(2)} className={rating >= 2 ? 'active' : ''}>
        <FontAwesomeIcon icon={rating >= 2 ? faStarSolid : faStarRegular} />
      </button>
      <button onClick={() => toggleRating(3)} className={rating >= 3 ? 'active' : ''}>
        <FontAwesomeIcon icon={rating >= 3 ? faStarSolid : faStarRegular} />
      </button>
      <button onClick={() => toggleRating(4)} className={rating >= 4 ? 'active' : ''}>
        <FontAwesomeIcon icon={rating >= 4 ? faStarSolid : faStarRegular} />
      </button>
      <button onClick={() => toggleRating(5)} className={rating >= 5 ? 'active' : ''}>
        <FontAwesomeIcon icon={rating >= 5 ? faStarSolid : faStarRegular} />
      </button>
    </div>
  );
}
export default RatingButton;
