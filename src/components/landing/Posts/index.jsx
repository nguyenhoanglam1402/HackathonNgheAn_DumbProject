import { React, useEffect, useState } from "react";
import "./style.css";
import PostItem from "./post-item";
import { fetchPosts } from "api/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
  const [newsfeed, setNewsFeed] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setNewsFeed(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="post-block">
      <h1 className="title-block">
        Bài đăng nổi bật
        <FontAwesomeIcon className="title-icon" icon={faBullhorn} />
      </h1>
      <div className="post-item-block">
        {newsfeed.map((item, index) => {
          console.log(item.uid);
          return (
            <PostItem
              name={item.author}
              key={index}
              content={item.content}
              imageURL={item.images[0]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
