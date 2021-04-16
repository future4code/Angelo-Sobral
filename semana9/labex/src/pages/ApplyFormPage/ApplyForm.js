import axios from "axios";
import React from "react";
import { URL_TRIPS } from "../../utils/apiUtils";
import {countries} from "../../utils/countries"
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";

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

    return (<>
    <h1>Página de inscrição</h1>
    <form onSubmit={onSubmit}>
        <select name="tripId" value={form.tripId} onChange={onChange} >
            <option value="" disabled>Escolha uma viagem</option>
            {data.trips && data.trips.map((trip) => {
            return <option key={trip.id} value={trip.id}>{trip.name}</option>
         })}
        </select>
        <input value={form.name} onChange={onChange} name="name" placeholder="Nome"/>
        <input value={form.age} onChange={onChange} name="age" placeholder="Idade"/>
        <input value={form.applicationText} onChange={onChange} name="applicationText" placeholder="Por que devemos escolher você"/>
        <input value={form.profession} onChange={onChange} name="profession" placeholder="Profissão"/>
        <select value={form.country} onChange={onChange} name="country">
            <option value="" disabled>Escolha um país</option>
            {countries.map((country) => {
                return <option key={country} value={country}>{country}</option>
            })}
        </select>
        <button>Candidatar-se</button>
    </form>
    </>)
}

export default ApplyFormsPage