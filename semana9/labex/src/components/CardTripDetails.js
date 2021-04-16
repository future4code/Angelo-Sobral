import React from "react";
import { useHistory } from "react-router-dom";
import { headers, URL_TRIPS } from "../utils/apiUtils";
import axios from "axios"

const CardTripDetail = (props) => {

    const history = useHistory()

    const trip = props.trip

    const decideApproved = (tripId, candidateId, choice) => {
        const body = {
          approve: choice,
        };
        axios.put(
          `${URL_TRIPS}/${tripId}/candidates/${candidateId}/decide`,
          body,
          headers
        );
      };

  return (
    <div>
      <h1>Página de detalhes da viagem e candidaturas</h1>
      <button onClick={history.goBack}>Voltar</button>
      <h2>{trip.name}</h2>
      <p>Viagem: {trip.name}</p>
      <p>Planeta: {trip.planet}</p>
      <p>Descrição: {trip.description}</p>
      <p>Data da partida: {trip.date}</p>
      <p>Duração: {trip.durationInDays} dias</p>
      <hr />
      {trip.candidates && trip.candidates.length ? (
        <>
          <h2>{"Candidatos(as) aguardando aprovação"}</h2>
          {trip.candidates.map((data) => {
            return (
              <>
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.applicationText}</p>
                <p>{data.profession}</p>
                <p>{data.country}</p>
                <button onClick={() => decideApproved(trip.id, data.id, true)}>
                  Aprovar
                </button>
                <button>Reprovar</button>
              </>
            );
          })}
        </>
      ) : (
        <>
          <h2>{"Candidatos(as) aguardando aprovação"}</h2>
          <p>Nenhuma candidatura para esta viagem</p>
        </>
      )}
      <hr />
      {trip.approved && trip.approved.length > 0 ? (
        <p>
          <h2>{"Candidatos(as) aprovados"}</h2>
          {trip.approved.map((data) => {
            return (
              <>
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.applicationText}</p>
                <p>{data.profession}</p>
                <p>{data.country}</p>
              </>
            );
          })}
        </p>
      ) : (
        <p>
          <h2>{"Candidatos(as) aprovados"}</h2>
          Nenhuma aprovação para esta viagem!
        </p>
      )}
    </div>
  );
};

export default CardTripDetail;
