import React, { useState, useEffect } from "react";
import { useAuth } from "utils/AuthProvider";
import "../styles/PhotoGridItem.scss";
import DeletePhotoButton from "./DeletePhotoButton";
import EditPhotoButton from "./EditPhotoButton";
import FavoriteButton from "./FavoriteButton";

function PhotoGridItem(props, context) {
  //  const photo = props.item
  const [photo, setPhoto] = useState(props.item);

  useEffect(() => {
    setPhoto(props.item)
  }, [props.item])

  const auth = useAuth();

  return (
    <div className={`PhotoGridItem ${props.className}`}>
      <div className="PhotoGridItem__photo">
        <img src={photo.url} />
      </div>
      {auth.isLoggedIn ? (
        <FavoriteButton favorite={photo.hasFavorite} photoId={photo.id} />
      ) : null}
      {auth.isLoggedIn && photo.user.id === auth.user.id
        ? [
            <DeletePhotoButton key={`delete-${photo.id}`} photoId={photo.id} />,
            <EditPhotoButton key={`edit-${photo.id}`} photo={photo} />,
          ]
        : null}
      <h4>{photo.name}</h4>
      <p className="username">{photo.user.username}</p>
      <p className="photo-description">{photo.description}</p>
    </div>
  );
}
export default PhotoGridItem;
