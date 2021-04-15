import React from "react";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { goToCreteTripPage, goToTripDetailsPage } from "../routes/coordinator";

const AdiminHomePage = () => {
  const history = useHistory();
  const data = useRequestData("/trips", []);

  const token = window.localStorage.getItem("tokenLabeX");

  const logout = () => {
    window.localStorage.removeItem("tokenLabeX");
    history.push("/login");
  };

  return (
    <>
      {token ? (
        <>
          <h1>Página do Administrador</h1>
          <button onClick={logout}>Logout</button>
          <button onClick={() => goToCreteTripPage(history)}>
            Criar Viagem
          </button>
          {data.trips &&
            data.trips.map((trip) => {
              return (
                <div>
                  <p>
                    {trip.name}{" "}
                    <button
                      onClick={() => goToTripDetailsPage(history, trip.id)}
                    >
                      Detalhes da Viagem
                    </button>
                  </p>
                </div>
              );
            })}
        </>
      ) : (
        <div>Você precisa estar logado para acessar essa página</div>
      )}
    </>
  );
};

export default AdiminHomePage;
