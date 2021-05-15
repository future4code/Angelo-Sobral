import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { URL_TRIPS } from "../../utils/apiUtils";
import { FormArea, Input, Main, MainContainer } from "./style";
import HeaderCreateTrip from "../../components/HeaderCreateTrip";

const CreateTripPage = () => {
  const [form, onChange, resetForm] = useForm({
    name: "",
    description: "",
    planet: "",
    date: "",
    durationInDays: "",
  });
  useProtectedPage();

  const formSubmit = (e) => {
    e.preventDefault();
    if (form.planet === "") {
      return;
    } else {
      onSubmit();
    }
  };

  const onSubmit = () => {
    createTrip();
    resetForm();
  };

  const headers = { 
    headers: { auth: window.localStorage.getItem("tokenLabeX")
    }
  }

  //para criar uma nova viagem, deve ser adicionado um backround url manualmente na TripDetailsPage
  const createTrip = () => {
    axios
      .post(URL_TRIPS, form, headers)
      .then((res) => {
        alert("Viagem criada com sucesso! Agora é só aguardar a tripulação!");
      })
      .catch((err) => {
        console.log("Mensagem de erro", err);
      });
  };

  const dateToday = new Date().toISOString().slice(0, 10);

  return (
    <Main>
      <HeaderCreateTrip />
      <MainContainer>
        <FormArea onSubmit={formSubmit}>
          <input
            required
            name="name"
            value={form.name}
            onChange={onChange}
            pattern="(.*[a-z]){5}"
            placeholder="Nome da viagem"
            title="Deve ter pelo menos 5 letras."
          />
          <input
            required
            name="description"
            value={form.description}
            onChange={onChange}
            pattern="^.{30,}$"
            placeholder="Descrição da viagem"
            title="Deve ter pelo menos 30 caracteres."
          />
          <select
            required
            name="planet"
            value={form.planet}
            onChange={onChange}
          >
            <option value="" disabled>
              Escolha o planeta
            </option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Jupiter">Jupter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>
          </select>
          <input
            required
            name="date"
            value={form.date}
            onChange={onChange}
            type="date"
            min={dateToday}
            placeholder="Data da viagem"
          />
          <Input
            required
            name="durationInDays"
            value={form.durationInDays}
            type="number"
            min="50"
            onChange={onChange}
            placeholder="Duração da viagem em dias"
          />
          <button>Criar Viagem</button>
        </FormArea>
      </MainContainer>
    </Main>
  );
};

export default CreateTripPage;
