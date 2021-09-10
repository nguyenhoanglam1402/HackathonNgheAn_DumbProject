import * as React from "react";
import "./style.css";
const Info = (props) => {
  const { info } = props;
  const author = `${info.author}`;
  const content = `${info.content}`;
  return (
    <div className="infor-container">
      <div className="infor-author">{author}</div>
      <div className="content-container">
        <p className="infor-content">{content}</p>
        <div>
          <img width={240} src={info.pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
