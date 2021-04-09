import React from "react";
import "../App.css";

const MatchScreen = (props) => {
  return (
    <div className="cardItsMatch">
      <button onClick={() => props.closeMatch(false)} className="closeMatch">X</button>
      <img
        className="matchImg"
        src="https://lojadeumatch.com/wp-content/uploads/elementor/thumbs/Deu-MAtch-Recuperado-06-o1qztg48lw17t9tw7ydksoz5ry03cxtqm4ihtjfrug.png"
        alt="Tinder match"
      />
      <img className="photoItsMatch" src={props.person} alt="person" />
    </div>
  );
};

export default MatchScreen;