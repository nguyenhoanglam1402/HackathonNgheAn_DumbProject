import { React, useState } from "react";
import Card from "./card";
import "./style.css";
import riveImage from "assets/other/card/rice.png";
import vegetableImage from "assets/other/card/rau-cu.png";
import cerealsImage from "assets/other/card/ngu-coc.png";
import cafeImage from "assets/other/card/cafe.png";
import fruitImage from "assets/other/card/trai-cay.png";

const Cards = () => {
  const [list, setList] = useState([
    {
      pic: riveImage,
      type: "Gạo",
    },
    {
      pic: vegetableImage,
      type: "Rau củ",
    },
    {
      pic: cerealsImage,
      type: "Ngũ cốc",
    },
    {
      pic: cafeImage,
      type: "Cà phê",
    },
    {
      pic: fruitImage,
      type: "Trái cây",
    },
  ]);

  return (
    <div className="card-block">
      <div className="cards">
        {list.map((item, index) => (
          <Card image={item.pic} name={item.type} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
