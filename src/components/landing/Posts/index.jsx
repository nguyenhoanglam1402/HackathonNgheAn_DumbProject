import { React, useEffect, useState } from "react";
import "./style.css";
import firebase from "firebase";
import PostItem from "./post-item";

const Posts = () => {
  const [newsfeed, setNewsFeed] = useState([]);
  useEffect(() => {
    let lists = [];
    const unsubcribe = firebase
      .firestore()
      .collection("newsfeed")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((item) => {
          lists.push(item.data());
        });
        setNewsFeed(lists);
      })
      .catch((error) => {
        console.log(error);
      });
    return unsubcribe; //Stop updating if it was unmounted
  }, []);
  return (
    <div className="post-block">
      <div className="post-item-block">
        {newsfeed.map((item, index) => {
          console.log(item);
          return (
            <PostItem name="Nguyen Lam" content={item.content} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
