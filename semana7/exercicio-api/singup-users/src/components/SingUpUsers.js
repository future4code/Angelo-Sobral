import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class SingUpUsers extends React.Component {

    state = {
        users: [],
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
                <button>Cadastrar</button>
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
    width: 100px;
}
`