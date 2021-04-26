import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import { URL_TRIPS } from "../api/apiUtils";
import { goToApplyFormPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";

const ListTripPage = () => {
    const [trips, setTrips] = useState([])
    const history = useHistory()

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get(URL_TRIPS)
        .then((res) => {
            setTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
    <>
    <h1>Página de  Listas de Viagens</h1>
    <button onClick={()=> goToApplyFormPage(history)}>Candidata-se</button>
    <MainTripCard>
        {trips.map((trip) => {
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