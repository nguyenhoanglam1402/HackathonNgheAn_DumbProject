import { React } from "react";
import "./style.css";

const PopUp = (props) => {
  return props.trigger ? (
    <div className={`popup ${props.compeleted || "popup-error"}`}>
      <div className="popup-container">
        <div
          className={`popup-inner ${props.compeleted || "popup-error-inner"}`}
        >
          <h1 className="popup-title">{props.title || "Lỗi!"}</h1>
          <div className="popup-content">
            {props.content ||
              "Chúng tôi tìm thấy có gì đó xảy ra không đúng trong hệ thống!"}
          </div>
          <button
            className={`btn btn-agree-popup`}
            onClick={() => props.setTrigger(false)}
          >
            Đồng ý
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default PopUp;
