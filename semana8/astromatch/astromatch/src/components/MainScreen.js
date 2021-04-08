import React, { useEffect, useState } from "react"
import axios from 'axios'
import "../App.css"
import Buttons from "./Buttons"
import Setting from "../assets/img/setting.svg"
import styled from 'styled-components'
import { keyframes } from 'styled-components'

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

  const choosePerson = (id, choice) => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/angelo/choose-person'
    const body = {
        id: id,
        choice: choice
    }
    axios.post(url, body)
    .then((response) => {
    setIsMatch(response.data)
    })
    .catch ((err) => {
    console.log(err)})
    {body.choice ? (toggle('right')) : (toggle('left'))}
  }

  const toggle = (dir) => {
    let card = document.querySelector('.cardProfile')
    card.classList.toggle(dir)
  }

  return (
    
    <>
    {/* <SwipeCard>teste</SwipeCard> */}
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

const swipeRight = keyframes`
0% {
  transform: translateX(0px)
}
100% {
  transform: translateX(1000%)
}`

const swipeLeft = keyframes`
0% {
  transform: translateX(0px)
}
100% {
  transform: translateX(-1000%)
}`

const SwipeCard = styled.div`
display: inline-block;
background-color: blue;
width: 200px;
height: 100px;
animation: ${swipeRight} 1s linear;
`