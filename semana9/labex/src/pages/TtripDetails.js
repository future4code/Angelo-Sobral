import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

const TripDetailsPage = () => {
    useProtectedPage()

    return <div>Página de detalhes da viagem e candidaturas</div>
}

export default TripDetailsPage