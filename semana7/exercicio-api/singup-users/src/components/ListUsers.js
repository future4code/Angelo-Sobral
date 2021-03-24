import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { axiosConfig, baseUrl } from './Params';
import { DetailsList } from './DetailsList';

// styled components no final do código

export default class ListUsers extends React.Component {

    state= {
        users: [],
        currentPage: true,
        userId: ''
    }

    componentDidUpdate() {
        this.getAllUsers()
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        try {
        const response = await axios.get(baseUrl, axiosConfig)
        this.setState({ users: response.data})
        } catch (error) {
        console.log(error.response)
        }
    }

    deleteUser = async (userId) => {
        try {
            if (window.confirm('Tem certeza que deseja excluir o usuário?')) {
        
                const response = await axios.delete(`${baseUrl}${userId}`, axiosConfig)
                    this.getAllUsers()
                    this.setState({currentPage: true, userId: ''})
                    alert('Usuário removido com sucesso!')
            } 
        
        } catch (error) {
            alert('Não foi possível remover o usário. Tente novamente mais tarde!')
        }
    }

    togglePage = (id) => {
        this.state.currentPage 
        ?
        (this.setState({currentPage: false, userId: id}))
        :
        (this.setState({currentPage: true, userId: ''}))
    }

    render() {
         const users = this.state.users.map((user) => {
             return <div>
                        <li onClick={() => this.togglePage(user.id)}> {user.name} </li>
                        <span onClick={() => this.deleteUser(user.id)}>X</span>
                    </div>
         })
        return (
            <ContainerUser>
                <ul>
                    <BackButton onClick={this.props.togglePage}>Voltar para tela de cadastro</BackButton>
                    <h1>Lista de Usuários Cadastrados:</h1>
                    {this.state.currentPage 
                    ? 
                    users 
                    : 
                    <DetailsList togglePage={this.togglePage} userId={this.state.userId} deleteUser={this.deleteUser}/>}
                </ul>
            </ContainerUser>
        )
    }
}

const ContainerUser = styled.div`
display: flex;
flex-direction: column;
width: 600px;
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
    width: 100%;
}

    div {
        position: relative;

        :nth-child(2n) {
            background-color: #ebecf0;
        }

    li {
        list-style:none;
        text-align: left;
        margin: 5px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 10px;
        opacity: .8;
        cursor: pointer;
        background-color: #f7f7f7;
        

        :hover {
            opacity: 1;
        }

    }

    span {
            position: absolute;
            top:10px;
            right: -10px;
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
const BackButton = styled.button`
margin-bottom: 1.5rem;
`