import { React, useState } from "react";
import Card from "./card";
import "./style.css";
import image from "assets/other/card/ngu-coc.png";

const Cards = () => {
  const [list, setList] = useState([
    "Gạo",
    "Rau củ",
    "Ngũ cốc",
    "Trái cây",
    "Cà phê",
  ]);

  return (
    <div className="card-block">
      <div className="cards">
        {list.map((item, index) => (
          <Card image={image} name={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
