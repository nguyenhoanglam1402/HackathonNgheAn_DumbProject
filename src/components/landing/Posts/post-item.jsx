import { React } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import image from "assets/images/avatar.png";

const PostItem = (props) => {
  return (
    <div className="post-item">
      <div className="titlebar-item">
        <LazyLoadImage
          className="user-avatar"
          src={image || props.avatar}
          alt={image}
        />
        <div className="username-block">
          <p className="username">{props.name}</p>
        </div>
      </div>
      <div className="post-content">
        <LazyLoadImage className="post-image" />
        <p className="content-detail">{props.content}</p>
      </div>
    </div>
  );
};

export default PostItem;
