import { React, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imageAvatar from "assets/images/avatar.png";
import postDefaltImage from "assets/icons/logo.png";
import firebase from "firebase";
import { date } from "yup/lib/locale";

const PostItem = (props) => {
  const [image, setImage] = useState();
  const imageRef = firebase.storage().ref(props.imageURL);
  imageRef
    .getDownloadURL()
    .then((data) => setImage(data))
    .catch((error) => console.error(error));
  return (
    <div className="post-item">
      <div className="titlebar-item">
        <LazyLoadImage
          className="user-avatar"
          src={imageAvatar || props.avatar}
          alt={image}
        />
        <div className="username-block">
          <p className="username">{props.name}</p>
        </div>
      </div>
      <div className="post-content">
        <LazyLoadImage
          className="post-image"
          src={image ? image : postDefaltImage}
        />
        <p className="content-detail">{props.content}</p>
      </div>
    </div>
  );
};

export default PostItem;
