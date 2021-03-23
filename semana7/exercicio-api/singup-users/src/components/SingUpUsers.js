import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// styled components no final do código

export default class SingUpUsers extends React.Component {

    state = {
        inputValueName:'',
        inputValueEmail:'',
    }

    handleName = (e) => {
        this.setState({ inputValueName: e.target.value})
    }
    
    handleEmail = (e) => {
        this.setState({ inputValueEmail: e.target.value})
    }

    createUser = () => {
        if (this.state.inputValueEmail && this.state.inputValueName) {
            const body = {
                name: this.state.inputValueName,
                email: this.state.inputValueEmail
            }

            axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
                headers: {
                    Authorization: 'angelovso-cruz'
                }
            }).then((result) => {
                this.setState({inputValueEmail: '', inputValueName: ''})
                alert('Cadastro realizado com sucesso!')
            }).catch((error) => {
                alert('Usuário ou email já cadastrado')
            })



        } else {
            alert('Preencha todos os campos realizar o cadastro!')
        }

    }

    render(){

        return(
            <ContainerDiv>
                <h1>Tela de Cadastro</h1>
                <input
                onChange={this.handleName}
                value={this.state.inputValueName}
                placeholder={'Nome'}
                />
                <input
                onChange={this.handleEmail}
                value={this.state.inputValueEmail}
                placeholder={'Email'}
                />
                <button onClick={this.createUser}>Cadastrar</button>
                <button onClick={this.props.togglePage}>Ir para tela de Usuários</button>
            </ContainerDiv>
        )
    }
}

const ContainerDiv = styled.div`
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
}

input {
    margin-bottom: 1.5rem;
    width: 200px;
}

button {
    width: 80px;
    margin-bottom: 1.5rem;

    :last-child {
        width: 160px;
    }
}
`