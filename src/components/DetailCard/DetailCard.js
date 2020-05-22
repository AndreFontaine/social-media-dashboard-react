import React from "react";
import "./DetailCard.css";

function DetailCard(props) {
  return (
    <article className="card-small">
      <div className="card-small-title">{props.title}</div>
      <div className="card-small-social">
        <img src={props.socialIcon} alt="" />
      </div>
      <div className="card-small-number">{props.number}</div>
      <div className="card-small-percentage">
        <div className="card-small-percentage-ctn">
          <img src={props.todayIcon} alt="" />
          <span className={`percentage ${props.classToday}`}>
            {props.today} %
          </span>
        </div>
      </div>
    </article>
  );
}

export default DetailCard;
