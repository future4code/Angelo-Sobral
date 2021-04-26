import axios from "axios";
import React from "react";
import { URL_TRIPS } from "../../utils/apiUtils";
import {countries} from "../../utils/countries"
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { FormArea, Main, MainContainer } from "./style";


const ApplyFormsPage = () => {
    const data = useRequestData('/trips', [])
    const [form, onChange, resetForm] = useForm({name:"", age: "", applicationText:"", profession: "", country: "", tripId: ""})

    const onSubmit = (e) => {
        e.preventDefault()
        applyToTrip(form.tripId)
        resetForm()
    }

    const applyToTrip = (id) => {
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios.post(`${URL_TRIPS}/${id}/apply`, body)
        .then(res => {
            console.log(res)
            alert('Candidatura aplicada. Aguarde nosso contato.')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (<Main>
        <MainContainer>
    <h1>Página de Candidatura</h1>
    <FormArea onSubmit={onSubmit}>
        <select required name="tripId" value={form.tripId} onChange={onChange} >
            <option value="" disabled>Escolha uma viagem</option>
            {data.trips && data.trips.map((trip) => {
            return <option key={trip.id} value={trip.id}>{trip.name}</option>
         })}
        </select>
        <input required value={form.name} onChange={onChange} name="name" pattern="^.{3,}$" placeholder="Nome" title="O nome deve conter pelo menos 3 letras"/>
        <input required value={form.age} onChange={onChange} name="age" type="number" min="18" placeholder="Idade"/>
        <input required value={form.applicationText} onChange={onChange} name="applicationText" pattern="^.{30,}$" placeholder="Por que devemos escolher você" title="Deve conter pelo menos 30 letras"/>
        <input required value={form.profession} onChange={onChange} name="profession" pattern="^.{10,}$" placeholder="Profissão" title="Deve conter pelo menos 10 letras"/>
        <select required value={form.country} onChange={onChange} name="country">
            <option value="" disabled>Escolha um país</option>
            {countries.map((country) => {
                return <option key={country} value={country}>{country}</option>
            })}
        </select>
        <button>Enviar candidatura</button>
    </FormArea>
    </MainContainer>
    </Main>)
}

export default ApplyFormsPage