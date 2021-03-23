import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// styled components no final do código

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

    deleteUser = (userId) => {
        if (window.confirm('Tem certeza que deseja excluir o usuário?')) {
        
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,{
            headers: {
                Authorization: 'angelovso-cruz'
            }
        } ).then((result) => {
            this.getAllUsers()
            alert('Usuário removido com sucesso!')
        }).catch((res) => {
            alert('Não foi possível remover usário. Tente novamente mais tarde!')
        })
        }
    }

    render() {
         const users = this.state.users.map((user) => {
             return <li>{user.name} <span onClick={() => this.deleteUser(user.id)}>X</span></li>
         })
        return (
            <ContainerUser>
                <ul>
                    <button onClick={this.props.togglePage}>Voltar para tela de cadastro</button>
                    <h1>Lista de Usuários Cadastrados:</h1>
                    {users}
                </ul>
            </ContainerUser>
        )
    }
}

const ContainerUser = styled.div`
display: flex;
flex-direction: column;
width: 400px;
height: 100%;
margin: 0 auto;
padding: 2rem;
align-items: center;
border: 2px solid #1a1a1a;

h1 {
    margin: 0 0 1.5rem 0;
    font-size: 1.7rem;
}

ul {
    margin: 0;
    padding: 0;
    align-self: flex-start;

    button {
        margin-bottom: 1.5rem;
    }
}

li {
    list-style:none;
    text-align: left;
    margin: 5px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    :nth-child(2n) {
        background-color: #ebecf0;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #c00000;
        width: 20px;
        height: 20px;
        color: #fff;
        border-radius: 50%;
        cursor: pointer;
    }
}
`