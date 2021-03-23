import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class ListUsers extends React.Component {

    state= {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'angelovso-cruz'
            }
        }).then((result) => {
            this.setState({ users: result.data})
        }).catch((error) => {
            console.log(error.response.data)
        })

    }

    render() {
         const users = this.state.users.map((user) => {
             return <li>{user.name}</li>
         })
        return (
            <div>
                {users}
            </div>
        )
    }
}