import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Buttons from "./Buttons";
import Setting from "../assets/img/setting.svg";
import ItsMatch from "./ItsMatch";
import CardProfile from "./CardProfile";
import Match from "./Match";

const MainScreen = () => {
  const [person, setPerson] = useState({});
  const [isMatch, setIsMatch] = useState({});
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getProfile();
  }, [isMatch]);

  const getProfile = async () => {
    setLoading(false);
    try {
      const url =
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/angelo/person";
      const res = await axios.get(url);
      setPerson(res.data.profile);
      setLoading(true);
    } catch (err) {
      console.log(err);
      alert(
        "Tivemos alguma pendência no servidor. Faça uma limpeza dos dados."
      );
    }
  };

  const choosePerson = (id, choice) => {
    const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/angelo/choose-person";
    const body = {
      id: id,
      choice: choice,
    };
    axios
      .post(url, body)
      .then((response) => {
        console.log(response.data)
        setIsMatch(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
      body.choice ? toggleSwipe("right") : toggleSwipe("left");
  };

  const toggleSwipe = (dir) => {
    let card = document.querySelector(".cardProfile");
    card.classList.toggle(dir);
  };

  const toggleMatch = () => {
    let itsMatch = document.querySelector(".itsMatch");
    itsMatch.classList.toggle("active");
  };

  // const matchClose = () => {
  //   setTimeout(() => setLike(false), 1000);
  // };

  return (
    <>
      <div className="card">
        <div className="settings">
          <img className="iconSetting" src={Setting} title="Configurações" alt="Settings"/>
          <h2>Astromatch</h2>
          <div onClick={toggleMatch} className="matchIcon">
            <img
              src="https://tinderelos.files.wordpress.com/2018/07/tinder-logo.png"
              title="Matches"
              alt="Logo Tinder"
            />
            {matches.length > 0 && <span>{matches.length}</span>}
          </div>
        </div>

        <div className="itsMatch">
          <ItsMatch matches={matches} setMatches={setMatches} />
        </div>
        {loading && person ? (
          <>
            {isMatch.isMatch ? <Match closeMatch={setIsMatch} person={matches[matches.length-1].photo}/> :
            <CardProfile person={person} />}
            <Buttons
              id={person.id}
              choosePerson={choosePerson}
              getProfile={getProfile}
            />
          </>
        ) : (
          <div className="cardProfile">Carregando...</div>
        )}
      </div>
    </>
  );
};

export default MainScreen;