import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { headers, URL_TRIPS_DETAIL } from "../../utils/apiUtils";
import CardTripDetail from "../../components/CardTripDetails";

const TripDetailsPage = () => {
  
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


  return (
    <main>
      <CardTripDetail trip={trip}/>
    </main>
  );
};

export default TripDetailsPage;
