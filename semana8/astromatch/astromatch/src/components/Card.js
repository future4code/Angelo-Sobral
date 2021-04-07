import React, { useEffect, useState } from "react"
import axios from 'axios'
import "../App.css"
import Buttons from "./Buttons"
import Setting from "../assets/img/setting.svg"

const MainScreen = () => {

  const [person, setPerson] = useState({})
  const [isMatch, setIsMatch] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProfile()
  }, [isMatch])

  const getProfile = async () => {
    setLoading(false)
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

  const choosePerson = async (id, choice) => {
        
    try {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/angelo/choose-person'
        const body = {
            id: id,
            choice: choice
        }
        const res = await axios.post(url, body)
        setIsMatch(res.data)
    } catch (err) {
        console.log(err)
    }
    console.log(isMatch)
}

  return (
    
    <>
    {loading ?
    (<div className="card">
        <div className="settings">
            <img className="iconSetting" src={Setting} title="Configurações"/>
            <h2>Astromatch</h2>
            <div className="matchIcon">
                <img src="https://tinderelos.files.wordpress.com/2018/07/tinder-logo.png" title="Matches"/>
            </div>
        </div>
      
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
      choosePerson={choosePerson}
      />

    </div>) : (<div className="card"><div className="cardProfile">Carregando...</div></div>)}
    </>
  );
};

export default MainScreen;
