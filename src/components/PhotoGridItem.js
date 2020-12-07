import React, { useState, useEffect } from "react";
import { useAuth } from "utils/AuthProvider";
import DeletePhotoButton from "./DeletePhotoButton";
import EditPhotoButton from "./EditPhotoButton";
import FavoriteButton from "./FavoriteButton";
import RatingButton from "./RatingButton";

function PhotoGridItem(props, context) {
  const [photo, setPhoto] = useState(props.item);

  useEffect(() => {
    setPhoto(props.item);
  }, [props.item]);

  const auth = useAuth();

  const canManagePhoto = auth.isLoggedIn && (photo.user.id === auth.user.id || auth.user.admin)

  return (
    <div className={`PhotoGridItem ${props.className}`}>
      <div className="owner-ctrls">
        <span>{photo.user.username}</span>

        {/* owner controls */}
        {canManagePhoto ? [
              <DeletePhotoButton
                key={`delete-${photo.id}`}
                photoId={photo.id}
              />,
              <EditPhotoButton key={`edit-${photo.id}`} photo={photo} />,
            ]
          : null}
      </div>
      {/* photo */}
      <div className="PhotoGridItem__photo">
        <img src={photo.url} />
      </div>
      <div className="interactions">
        {/* user interactions */}
        {auth.isLoggedIn
          ? [
              <FavoriteButton
                key={`fav-${photo.id}`}
                favorite={photo.hasFavorite}
                photoId={photo.id}
              />,
              <RatingButton
                key={`rate-${photo.id}`}
                rating={photo.hasRating}
                photoId={photo.id}
              />,
            ]
          : null}
      </div>
      <div className="info">
        <p><strong>{photo.name}</strong></p>
        <p>{photo.description}</p>
      </div>
    </div>
  );
}
export default PhotoGridItem;
