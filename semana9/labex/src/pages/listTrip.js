import React from "react";
import styled from "styled-components"
import { goToApplyFormPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";

const ListTripPage = () => {
    const history = useHistory()
    const data = useRequestData('/trips', [])

    return (
    <>
    <h1>Página de  Listas de Viagens</h1>
    <button onClick={()=> goToApplyFormPage(history)}>Candidata-se</button>
    <MainTripCard>
        {data.trips && data.trips.map((trip) => {
            return (<DetailsCard key={trip.id}>
                <p>Viagem: {trip.name}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Descrição: {trip.description}</p>
                <p>Data da partida: {trip.date}</p>
                <p>Duração: {trip.durationInDays} dias</p>
            </DetailsCard>)
        })}
    </MainTripCard>
    </>)
}

export default ListTripPage

const MainTripCard = styled.div`
display: flex;
flex-wrap: wrap;
`

const DetailsCard = styled.div`
background-color: blue;
margin: 10px;
flex: 1;
`