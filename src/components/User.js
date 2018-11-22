import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div className="user">
      <div className="user--centerpic">
        <Link
          to={{
            pathname: `/users/${props.login.username}`
          }}
          key={props.id}
        >
          <img src={props.picture.large} alt={props.name.first} />
        </Link>
      </div>
    </div>
  );
};
