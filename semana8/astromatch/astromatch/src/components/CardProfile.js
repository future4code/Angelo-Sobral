import React from "react";
import "../App.css";

const CardProfile = (props) => {
  return (
    <div className="cardProfile">
      <img src={props.person.photo} />
      <div className="info">
        <p>
          {props.person.name}, <span>{props.person.age}</span>
        </p>
        <p>{props.person.bio}</p>
      </div>
    </div>
  );
};

export default CardProfile;
