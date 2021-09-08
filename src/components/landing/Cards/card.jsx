import { React, useState } from "react";
import firebase from "firebase";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = (props) => {
  const [urlImage, setURL] = useState("");
  const refImage = firebase.storage().ref(props.image);
  refImage
    .getDownloadURL()
    .then((url) => {
      setURL(url);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div className="card">
      <div className="card-image-block">
        <LazyLoadImage
          className="card-image"
          effect="blur"
          src={urlImage}
          alt={urlImage}
        />
      </div>
      <h2 className="card-title">{props.name}</h2>
    </div>
  );
};

export default Card;
