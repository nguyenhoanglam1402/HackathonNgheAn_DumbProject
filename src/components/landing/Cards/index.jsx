import { React, useEffect, useState } from "react";
import Card from "./card";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { fetchCategory } from "api/services";
import { useDispatch } from "react-redux";
import { setCategory } from "actions/category";

const Cards = () => {
  const [list, setList] = useState([]);
  const categoryDispath = useDispatch();
  useEffect(() => {
    fetchCategory()
      .then((data) => {
        setList(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const action = setCategory(list);
  categoryDispath(action);
  return (
    <div className="card-block">
      <h1 className="title-block">
        Nông sản hiện có
        <FontAwesomeIcon className="title-icon" icon={faCarrot} />
      </h1>

      <div className="cards">
        {list.map((item, index) => (
          <Card image={item.pic} name={item.name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
