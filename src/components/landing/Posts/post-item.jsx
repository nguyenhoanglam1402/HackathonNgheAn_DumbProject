import { React } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imageAvatar from "assets/images/avatar.png";
import postDefaltImage from "assets/icons/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import NumberFormat from "react-number-format";

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
      <div className="connect-control">
        <div className="prize-block">
          <FontAwesomeIcon className="prize-connect-icon" icon={faCoins} />
          <div>
            <p className="price-tag">
              {props.price ? (
                <NumberFormat
                  value={props.price}
                  displayType="text"
                  thousandSeparator={true}
                />
              ) : (
                "Chưa định giá"
              )}
            </p>
          </div>
        </div>
        <button className={`btn btn-connect`}>Kết nối</button>
      </div>
    </div>
  );
};

export default PostItem;
