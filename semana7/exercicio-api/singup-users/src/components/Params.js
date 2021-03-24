import React from 'react';
import axios from 'axios';

export const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'

export const axiosConfig = {
    headers: {
        Authorization: 'angelovso-cruz'
    }
}

export const ValidateEmail = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
            Authorization: 'angelovso-cruz'
        }
    }).then((res) => {
        return res.data.email
    })
}