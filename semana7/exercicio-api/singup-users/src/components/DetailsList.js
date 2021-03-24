import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { axiosConfig, baseUrl } from './Params';

export class DetailsList extends React.Component {

    state={
        user:'',
        currentPage: false,
        inputValueName:'',
        inputValueEmail:''
    }
    
    componentDidMount() {
        this.getUserById()
    }

    handleName = (e) => {
        this.setState({inputValueName: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({inputValueEmail: e.target.value})
    }

    getUserById = async () => {
        try {
            const response = await axios.get(`${baseUrl}${this.props.userId}`, axiosConfig)
            this.setState({ user: response.data})
        } catch (error) {
            alert('Algo inesperado ocorreu. Tente novamente mais tarde!')
        }
    }

    editUser = async () => {
        try {
            if (this.state.inputValueName && this.state.inputValueEmail) {
                
                const body = {
                    name: this.state.inputValueName,
                    email: this.state.inputValueEmail
                }
    
                const response = await axios.put(`${baseUrl}${this.props.userId}`, body, axiosConfig)
                this.setState({ inputValueName: '', inputValueEmail:'', currentPage: false})
                this.getUserById()
                alert('Dados atualizados com sucesso')
            } else {
                alert('Preencha todos os campos para atualizar!')
            }

        } catch (error) {
            alert('Algo inesperado ocorreu. Tente novamente mais tarde!')
        }
    }

    editButton = () => {
        this.setState({ currentPage: !this.state.currentPage})
    }

    render () {
        
        return (
            
            <div>
                <h2>Detalhes do usuário</h2>
                <Details>
                    <p>Nome: {this.state.user.name}</p>
                    <p>E-mail: {this.state.user.email}</p>
                    <p onClick={this.editButton}>Editar</p>
                    <p onClick={() => this.props.deleteUser(this.state.user.id)}>Deletar</p>
                </Details>
                {this.state.currentPage 
                ?
                (<EditArea>
                    <input
                    placeholder={'Alterar nome'}
                    onChange={this.handleName}
                    value={this.state.inputValueName}
                    />
                    <input
                    placeholder={'Alterar e-mail'}
                    onChange={this.handleEmail}
                    value={this.state.inputValueEmail}
                    />
                    <Button onClick={this.editUser}>Salvar</Button>
                    <Button onClick={this.editButton}>Fechar</Button>
                </EditArea>) 
                : 
                null}
                <button onClick={this.props.togglePage}>Voltar</button>
            </div>
        )
    }
}

const Details = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 1rem;

p {
    margin: 0;
    align-self: center;
    padding: 5px;
    

    :nth-of-type(3) {
        background-color: #2E8BC0;
        color: #fff;
        cursor: pointer;
        padding: 0 3px;
    }

    :last-of-type {
        background-color: #c00000;
        color: #fff;
        cursor: pointer;
        padding: 0 3px;
    }
}
`
const EditArea = styled.div`
display: flex;

input {
    margin: 0 1rem 1rem 0;
    :first-of-type {
        width: 140px;
    }
}
`

const Button = styled.button`
    margin: 0 1rem 1rem 0;
`