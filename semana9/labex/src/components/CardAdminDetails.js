import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import { goToTripDetailsPage } from "../routes/coordinator";
import { headers, URL_TRIPS } from "../utils/apiUtils";
import styled from "styled-components"
import deleteButton from "../assets/images/excluir.svg"
import detailsButton from "../assets/images/web.svg"

const CardAdminDetails = (props) => {
  const history = useHistory();

  const data = props.data;

  const deleteTrip = (id) => {
    axios
      .delete(`${URL_TRIPS}/${id}`, headers)
      .then((res) => {
        alert("Viagem deletada com sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CardContainer>
      <h2>Viagens Programadas:</h2>
      {data.trips &&
        data.trips.map((trip) => {
          return (
            <CardDetails>
              <p>{trip.name}</p>
              <div>
              <button onClick={() => goToTripDetailsPage(history, trip.id)} title="Detalhes da Viagem">
                <img src={detailsButton} />
              </button>

              <button onClick={() => deleteTrip(trip.id)} title="Deletar Viagem">
                <img src={deleteButton}/>
              </button>
              </div>
            </CardDetails>
          );
        })}
    </CardContainer>
  );
};

export default CardAdminDetails;

const CardContainer = styled.div`
width: 33%;
height: 400px;
box-shadow: 0px 0px 10px rgba(0,0,0, .8);
backdrop-filter: blur(4px);
background: hsla(0, 0%, 70%, 0.7);
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
overflow-y: auto;

h2 {
  position: absolute;
  top: 10px;
}
`


const CardDetails = styled.div`
width: 90%;
height: 50px;
background-color: #f2f2f2;
margin-bottom: 10px;
padding: 0 10px;
border-radius: 3px;
box-shadow: 0px 0px 5px rgba(0,0,0, .8 );

display: flex;
justify-content: space-between;
align-items: center;

:hover{
  background-color: #e6e6e6;
}

div{
  display: flex;
  align-items: center;
}

button{

border: none;
cursor: pointer;
margin-left: 15px;
background: none;
height: 30px;
transition: .3s all ease;

:hover{
  transform: scale(1.05)
}

  img{
    width: 30px;
  }
}
`
