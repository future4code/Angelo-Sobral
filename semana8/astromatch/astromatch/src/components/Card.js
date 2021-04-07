import React, { useEffect, useState } from "react";
import axios from 'axios'
import "../App.css";

const Card = () => {

  const [person, setPerson] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    try {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person'
    const res = await axios.get(url)
    setPerson(res.data)
    } catch (err) {
        console.log(err)
        alert("Tivemos um probleminha no serivdor. Tente novamente mais tarde!")
    }
    console.log(person)
  }

  return (
    <div className="card">
      Card Astromatch
      
      <div className="cardProfile">
        <img src={person.profile.photo} />
        <div className="info">
          <p>
            {person.profile.name}, <span>{person.profile.age}</span>
          </p>
          <p>{person.profile.bio}</p>
        </div>
      </div>

      <div className="buttons">
        <button className="dislike"/>
        <button className="like"/>
      </div>  
    </div>
  );
};

export default Card;
