import React, { useState, useEffect } from "react";
import { useAuth } from "utils/AuthProvider";
import "../styles/PhotoGridItem.scss"
import DeletePhotoButton from "./DeletePhotoButton";
import FavoriteButton from './FavoriteButton'

function PhotoGridItem(props, context) {
//  const photo = props.item
 const [photo] = useState(props.item)

 const auth = useAuth();

  return (
    <div className={`PhotoGridItem ${props.className}`}>
    <div className="PhotoGridItem__photo">
     <img src={photo.url} />
     </div>
     { auth.isLoggedIn ? (
       <FavoriteButton favorite={photo.hasFavorite} photoId={photo.id}/>
     ) : null}
     { auth.isLoggedIn && photo.user.id === auth.user.id ? (
      <DeletePhotoButton photoId={photo.id}/>
     ) : null}
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
