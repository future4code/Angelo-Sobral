import React from "react";
import { goToApplyFormPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import {
  DetailsCard,
  Main,
  MainContainer,
  MainTripCard,
  Loading,
} from "./style";

const ListTripPage = () => {
  const history = useHistory();
  const data = useRequestData("/trips", []);

  return (
    <Main>
      <MainContainer>
        <h1>Relação de Viagens</h1>

        <MainTripCard>
          {data.trips ? (
            data.trips.map((trip) => {
              return (
                <DetailsCard key={trip.id}>
                  <p>
                    <strong>Viagem:</strong> {trip.name}
                  </p>
                  <p>
                    <strong>Planeta:</strong> {trip.planet}
                  </p>
                  <p>
                    <strong>Descrição:</strong> {trip.description}
                  </p>
                  <p>
                    <strong>Data da partida:</strong> {trip.date}
                  </p>
                  <p>
                    <strong>Duração:</strong> {trip.durationInDays} dias
                  </p>
                  <button onClick={() => goToApplyFormPage(history)}>
                    Candidatar-se
                  </button>
                </DetailsCard>
              );
            })
          ) : (
            <DetailsCard>
              <Loading>Carregando...</Loading>
            </DetailsCard>
          )}
        </MainTripCard>
      </MainContainer>
    </Main>
  );
};

export default ListTripPage;
