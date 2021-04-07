import React, { useEffect, useState } from "react";
import axios from 'axios'
import "../App.css";
import Buttons from "./Buttons";

const Card = () => {

  const [person, setPerson] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    try {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/angelo/person'
    const res = await axios.get(url)
    setPerson(res.data.profile)
    setLoading(true)
    } catch (err) {
        console.log(err)
        alert("Tivemos um probleminha no serivdor. Tente novamente mais tarde!")
    }
  }

  return (
    
    <>
    {loading ?
    (<div className="card">
        <img src="./assets/img/setting.svg" />
      Card Astromatch
      
      <div className="cardProfile">
        <img src={person.photo} />
        <div className="info">
          <p>
            {person.name}, <span>{person.age}</span>
          </p>
          <p>{person.bio}</p>
        </div>
      </div>

      <Buttons 
      id={person.id}
      loading={setLoading}
      getProfile={getProfile}
      />

    </div>) : (<div className="card"><div className="cardProfile">Carregando...</div></div>)}
    </>
  );
};

export default Card;
