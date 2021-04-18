import React from "react";
import { URL_TRIPS } from "../utils/apiUtils";
import axios from "axios";
import styled from "styled-components";

const CardTripDetail = (props) => {
  const trip = props.trip

  const headers = { 
    headers: { auth: window.localStorage.getItem("tokenLabeX")
    }
  }

  const decideApproved = (tripId, candidateId, choice) => {
    const body = {
      approve: choice,
    };
    axios.put(
      `${URL_TRIPS}/${tripId}/candidates/${candidateId}/decide`,
      body,
      headers
    )
    .then((res)=> {
      if (choice) { 
        alert('Candidato aprovado com sucesso!')
      } else {
        alert('Candidato reprovado com sucesso!')
      }

    })
    .catch((err)=> {
      console.log('erro', err.response)
    })
  };

  return (
    <MainCard>
      {trip.name
      ?
      (<>
      <CardTrip>
        <h1>{trip.name}</h1>
        <p>Planeta: {trip.planet}</p>
        <p>Descrição: {trip.description}</p>
        <p>Data da partida: {trip.date}</p>
        <p>Duração: {trip.durationInDays} dias</p>
      </CardTrip>

      {trip.candidates && trip.candidates.length ? (
        <CardPending>
          <h2>{"Candidatos aguardando aprovação"}</h2>
          {trip.candidates.map((data) => {
            return (
              <div key={data.id}>
                <p>Nome: {data.name}</p>
                <p>Idade: {data.age}</p>
                <p>Texto da Candidatura: {data.applicationText}</p>
                <p>Profissão: {data.profession}</p>
                <p>País: {data.country}</p>
                <button onClick={() => decideApproved(trip.id, data.id, true)}>
                  Aprovar
                </button>
                <button onClick={() => decideApproved(trip.id, data.id, false)}>Reprovar</button>
              </div>
            );
          })}
        </CardPending>
      ) : (
        <CardPending>
          <h2>{"Candidatos aguardando aprovação"}</h2>
          <p>Nenhuma candidatura para esta viagem</p>
        </CardPending>
      )}

      {trip.approved && trip.approved.length > 0 ? (
        <CardApproved>
          <h2>{"Candidatos aprovados"}</h2>
          <ul>
            {trip.approved.map((data) => {
              return <li key={data.id}>{data.name}</li>;
            })}
          </ul>
        </CardApproved>
      ) : (
        <CardApproved>
          <h2>{"Candidatos aprovados"}</h2>
          Nenhuma candidatura aprovada até o momento.
        </CardApproved>
      )}
      </>)
      :
      (<Loading>Carregando...</Loading>)}
    </MainCard>
  );
};

export default CardTripDetail;

const MainCard = styled.div`
  width: 60%;
  min-width: 360px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  backdrop-filter: blur(3px);
  background: hsla(0, 0%, 100%, 0.438);
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.718);
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
  width: 8px;
}
 
&::-webkit-scrollbar-track {
  background: transparent;
}
 
&::-webkit-scrollbar-thumb {
  background-color: #2f0444;
  border-radius: 50px;
}

&::-webkit-scrollbar-track{
  margin: 15px;
}
`;

const CardTrip = styled.div`
  width: 80%;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;

  h2 {
    font-size: 18px;
  }
`;

const CardPending = styled.div`
  width: 60%;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 5px;
  font-weight: 500;
  backdrop-filter: blur(3px);
  background: hsla(0, 0%, 100%, 0.138);
  box-shadow: 0px 0px 5px rgba(0,0,0, .8 );
  padding: 0 5px;
  border: 1px solid #f2f2f2;

  h2 {
    font-size: 18px;
  }

  button{
    outline: none;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 3px;
    background-color: green;
    color: #f2f2f2;
    margin-bottom: 10px;
    
    :last-child{
      margin-left: 5px;
      background-color: red;
    }

    :hover {
      opacity: .8;
      box-shadow: 0 4px 8px 0 rgb(0 9 2 / 52%);
      transform: translateY(-1px);
    }

    :active {
      transform: translateY(1px);
      box-shadow: none;
    }
  }

`;

const CardApproved = styled.div`
  width: 60%;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 5px;
  backdrop-filter: blur(3px);
  background: hsla(0, 0%, 100%, 0.138);
  box-shadow: 0px 0px 5px rgba(0,0,0, .8 );
  font-weight: 500;
  padding: 5px;
  border: 1px solid #f2f2f2;
  li {
    list-style-position: inside;
  }

  h2 {
    font-size: 18px;
  }
`;

const Loading = styled.div`
height:100%;
display: flex;
align-items: center;
text-align: center;
`
