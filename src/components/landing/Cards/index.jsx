import { React, useEffect, useState } from "react";
import Card from "./card";
import "./style.css";
import app from "firebase";

const Cards = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    function fetchData() {
      const ref = app.firestore().collection("category-product");
      ref.onSnapshot((querySnapShot) => {
        var items = [];
        querySnapShot.forEach((doc) => {
          items.push(doc.data());
        });
        setList(items);
      });
    }
    fetchData();
  }, []);
  console.log(list);
  return (
    <div className="card-block">
      <div className="cards">
        {list.map((item, index) => (
          <Card image={item.pic} name={item.name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
