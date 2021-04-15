import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { headers, URL_TRIPS, URL_TRIPS_DETAIL } from "../api/apiUtils";

const TripDetailsPage = () => {
  const history = useHistory();
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
    <main>
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
        {trip.candidates && trip.candidates.length > 0 ? (
          <p>
            <h2>{"Candidatos(as) aguardando aprovação"}</h2>
            {trip.candidates.map((data) => {
              return (
                <>
                  <p>{data.name}</p>
                  <p>{data.age}</p>
                  <p>{data.applicationText}</p>
                  <p>{data.profession}</p>
                  <p>{data.country}</p>
                  <button
                    onClick={() => decideApproved(trip.id, data.id, true)}
                  >
                    Aprovar
                  </button>
                  <button>Reprovar</button>
                </>
              );
            })}
          </p>
        ) : (
          <p>Nenhuma candidatura para esta viagem</p>
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
    </main>
  );
};

export default TripDetailsPage;
