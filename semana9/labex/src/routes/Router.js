import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdiminHomePage from "../pages/AdminHomePage/AdminHome";
import ApplyFormsPage from "../pages/ApplyFormPage/ApplyForm";
import CreateTripPage from "../pages/CreateTripPage/CreateTrip";
import HomePage from "../pages/HomePage/Home";
import ListTripPage from "../pages/ListTripPage/ListTrip";
import LoginPage from "../pages/LoginPage/Login";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/trips/list">
          <ListTripPage />
        </Route>

        <Route exact path="/trips/application">
          <ApplyFormsPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin/trips/list">
          <AdiminHomePage />
        </Route>

        <Route exact path="/admin/trips/create">
          <CreateTripPage />
        </Route>

        <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router