import React from "react";

export default props => (
  <div className="comment">
    <div className="comment__pic">
      <img
        src={props.randomUser.picture.thumbnail}
        alt={props.randomUser.name.first}
      />
    </div>
    <div className="comment__content">
      <div className="comment__user">
        {props.randomUser.name.first}
        {props.date === 0 ? <span>today</span> : <span>{props.date}d</span>}
      </div>
      <p>{props.comment}</p>
    </div>
  </div>
);
