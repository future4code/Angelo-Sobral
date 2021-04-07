import React, { useEffect, useState } from "react";
import axios from "axios";

const ItsMatch = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
      getMatches()
  }, [])

  const getMatches = async () => {
    try {
      const url =
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/angelo/matches";
      const res = await axios.get(url);
      setMatches(res.data.matches);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {matches.map((person) => {
        return (
          <div>
            <img src={person.photo} />
            <p>{person.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItsMatch