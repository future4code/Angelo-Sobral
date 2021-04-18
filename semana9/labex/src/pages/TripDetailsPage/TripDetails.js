import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { headers, URL_TRIPS_DETAIL } from "../../utils/apiUtils";
import CardTripDetail from "../../components/CardTripDetails";
import HeaderAdmin from "../../components/HeaderAdmin";
import styled from "styled-components";
import bgNetuno from "../../assets/images/surferNetuno.jpg"
import bgPlutao from "../../assets/images/plutao.jpg"
import bgVenus from "../../assets/images/venus.jpg"
import bgMarte from "../../assets/images/marte.jpg"
import bgJupiter from "../../assets/images/jupiter.jpg"
import bgSaturno from "../../assets/images/saturno.jpg"

const h1 = "Detalhes da Viagem"

const TripDetailsPage = () => {
  
  const params = useParams();
  const [trip, setTrip] = useState({});
  useProtectedPage();

  useEffect(() => {
    getTripDetail(params.id);
  }, [params.id, trip]);

  const getTripDetail = (id) => {
    axios
      .get(`${URL_TRIPS_DETAIL}${id}`, headers)
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const bgById = {
    a9PnhapPqRcGaHRpfUOqn: `${bgNetuno}`, // netuno
    aBgyaMoTD7iKcgziE7HQn: `${bgPlutao}`, // plutao
    a6y1YSJdfWtjAi1HHQDqj: `${bgVenus}`, // venus
    aFTugABO1Tm7sJS1dD4nE: `${bgMarte}`, // marte
    aH3gjzIp4CsI52nd2dHkd: `${bgJupiter}`, // jupiter
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