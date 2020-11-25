import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import "styles/MyPortfolio.css";
import { getPhotos } from 'data/photos'
import Grid from "components/Grid";
import PhotoGridItem from "components/PhotoGridItem"

const MyPortfolio = () => {
  
  const [photos, setPhotos] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    if (!user.username) return
    getPhotos({
      username: user.username,
    }).then((photos) => {
      setPhotos(photos.data.rows)
    })
  }, [user])
  

  return (
    <Container>
      <div>
        <h1>My photos</h1>
        <Grid  items={photos} component={PhotoGridItem} />
        {/* show favorited items */}
      </div>
    </Container>
  );
};

export default MyPortfolio;
