import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import { goToCreteTripPage, goToTripDetailsPage } from "../routes/coordinator";
import { headers, URL_TRIPS } from "../utils/apiUtils";


const CardAdminDetails = (props) => {
  const history = useHistory()
  
  const data = props.data
  
  const logout = props.logout

  const deleteTrip = (id) => {

    axios.delete(`${URL_TRIPS}/${id}`, headers)
    .then(res =>{
      alert("Viagem deletada com sucesso!")
      window.location.reload()
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
  <div>
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
                    {trip.name}
                  </p>
                  <button  onClick={() => goToTripDetailsPage(history, trip.id)}>
                    Detalhes da Viagem
                  </button>
                  
                  <button  onClick={() => deleteTrip(trip.id)}>
                    Deletar da Viagem
                  </button>
                </div>
              );
            })}
  </div>
  );
};

export default CardAdminDetails;
