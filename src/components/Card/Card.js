import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <article className={`card ${props.social}`}>
      <div className="card-header">
        <img src={props.socialIcon} alt="social-logo" />@{props.userName}
      </div>
      <div className="card-number">{props.number}</div>
      <div className="card-title">Followers</div>
      <div className="card-today">
        <img src={props.todayIcon} alt="up-icon" />
        {props.today} Today
      </div>
    </article>
  );
}

export default Card;
