import React, { useEffect } from "react";
import axios from "axios";
import "../App.css";

const ItsMatch = (props) => {
  useEffect(() => {
    getMatches();
  }, [props.matches]);

  const getMatches = async () => {
    try {
      const url =
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/angelo/matches";
      const res = await axios.get(url);
      props.setMatches(res.data.matches);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cardMatch">
      <h3>Matches</h3>
      {props.matches.map((person) => {
        return (
          <div key={person.id}>
            <img className="photoMatches" src={person.photo} alt="person"/>
            <p>{person.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItsMatch;