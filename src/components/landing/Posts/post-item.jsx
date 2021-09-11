import { React } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imageAvatar from "assets/images/avatar.png";
import postDefaltImage from "assets/icons/logo.png";

const PostItem = (props) => {
  return (
    <div className="post-item">
      <div className="titlebar-item">
        <LazyLoadImage
          className="post-avatar"
          src={imageAvatar || props.avatar}
          alt={imageAvatar}
        />
        <div className="username-block">
          <p className="username">{props.name}</p>
        </div>
      </div>
      <div className="post-content">
        <LazyLoadImage
          className="post-image"
          src={props.imageURL || postDefaltImage}
        />
        <p className="content-detail">{props.content}</p>
      </div>
    </div>
  );
};

export default PostItem;
