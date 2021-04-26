import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { URL_TRIPS_DETAIL } from "../../utils/apiUtils";
import CardTripDetail from "../../components/CardTripDetails";
import HeaderAdmin from "../../components/HeaderAdmin";
import styled from "styled-components";
import bgNetuno from "../../assets/images/surferNetuno.jpg"
import bgPlutao from "../../assets/images/plutao.jpg"
import bgVenus from "../../assets/images/venus.jpg"
import bgMarte from "../../assets/images/marte.jpg"
import bgJupiter from "../../assets/images/jupiter.jpg"
import bgSaturno from "../../assets/images/saturno.jpg"

// para usar como props no HeaderAdmin
const h1 = "Detalhes da Viagem"

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});
  const params = useParams();
  
  useProtectedPage();

  useEffect(() => {
    getTripDetail(params.id);
  }, [params.id, trip]); // quando coloco tirp fica dando loop e aparece menagem de vazamento de memória

  const headers = { 
    headers: { auth: window.localStorage.getItem("tokenLabeX")
    }
  }

  const getTripDetail = (id) => {
    axios
      .get(`${URL_TRIPS_DETAIL}${id}`, headers)
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log("erro da requisição", err.response);
      });
  };

  //para alterar background de acordo com tripId
  const bgById = {
    a9PnhapPqRcGaHRpfUOqn: `${bgNetuno}`,
    aBgyaMoTD7iKcgziE7HQn: `${bgPlutao}`,
    a6y1YSJdfWtjAi1HHQDqj: `${bgVenus}`,
    aFTugABO1Tm7sJS1dD4nE: `${bgMarte}`,
    aH3gjzIp4CsI52nd2dHkd: `${bgJupiter}`, 
    aMS8bMezO7khOQyeUv79Q: `${bgSaturno }`
  }
  
  return (
    <Main bgImg={bgById["a"+trip.id]}>
      <HeaderAdmin h1={h1} />
      <MainContainer>
      <CardTripDetail trip={trip}/>
      </MainContainer>
    </Main>
  );
};

export default TripDetailsPage;

const Main = styled.main`
background: url(${props => props.bgImg}) no-repeat center;
background-size: cover;
min-height: 100vh;
display:flex;
justify-content: center;
`
const MainContainer = styled.div`
max-width: 1440px;
width: 100%;
height: 100vh;
margin: 0 auto;
overflow: hidden;
position: relative;
`