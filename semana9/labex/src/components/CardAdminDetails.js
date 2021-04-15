import React from "react";
import axios from "axios";
import { headers } from "../api/apiUtils";

const CardAdminDetails = () => {
  const decideApproved = (tripId, candidateId, choice) => {
    const body = {
      approve: choice,
    };
    axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/angelo-odwyer-cruz/trips/${tripId}/candidates/${candidateId}/decide`,
      body,
      headers
    );
  };

  return <></>;
};

export default CardAdminDetails;
