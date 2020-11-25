import React, { useState, useEffect } from "react";
import "../styles/PhotoGridItem.scss"
import FavoriteButton from './FavoriteButton'

function PhotoGridItem(props, context) {
//  const photo = props.item
 const [photo] = useState(props.item)

  return (
    <div className={`PhotoGridItem ${props.className}`}>
    <div className="PhotoGridItem__photo">
     <img src={photo.url} />
     </div>
    <FavoriteButton favorite={photo.isFavorite} photoId={photo.id}/>
     <h4 >
       {photo.name}
     </h4>
     <p className="username">
       {photo.user.username}
     </p>
     <p className="photo-description">
       {photo.description}
     </p>
    </div>
  );
}
export default PhotoGridItem;
