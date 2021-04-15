import React from "react";
import "../App.css";

const ItsMatch = (props) => {
  return (
    <div className="cardMatch">
      <h3>Matches</h3>
      {props.matches.map((person) => {
        return (
          <div key={person.id}>
            <img className="photoMatches" src={person.photo} alt="person" />
            <p>{person.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItsMatch;
