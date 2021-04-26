import React from "react";
import { useHistory } from "react-router-dom";
import MoonBg from "../../assets/images/moon.png";
import { goToListTripPage, goToLoginPage } from "../../routes/coordinator";
import { Main, MoonIMG, MainCard, DivButtons } from  "./HomeStyle"

const HomePage = () => {
  const history = useHistory();

  const token = window.localStorage.getItem("tokenLabeX");
  
  return (
    <Main>
      <MoonIMG src={MoonBg} alt="moon" />
      <MainCard>
        <>
          <h1>Sejam bem vindos a LabeX!</h1>
          <p>Somos a melhor agência de viagens espaciais de toda via lactea!</p>
          <p>
            Se você sempre sonhou em fazer uma viagem espacial, chegou o
            momento. Conheça nossos destinos, candidate-se em uma de nossas
            aventuras, e nos convença a escolher você para reinventar o conceito
            de viagens ao redor da galáxia!
          </p>
        </>
        <DivButtons>
          <button
            onClick={() => {
              goToListTripPage(history);
            }}
          >
            Nossas Viagens
          </button>
          <button
            onClick={() => {
              goToLoginPage(history, token);
            }}
          >
            Acesso do Admin
          </button>
        </DivButtons>
      </MainCard>
    </Main>
  );
};

export default HomePage;
