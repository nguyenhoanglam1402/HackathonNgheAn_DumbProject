import { React } from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image-block">
        <img className="card-image" src={props.image} alt={props.image} />
      </div>
      <h2 className="card-title">{props.name}</h2>
    </div>
  );
};

export default Card;
