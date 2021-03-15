import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
width: 60%;
margin: 0 auto;
`
const Botao = styled.button`
margin: 40px 10px;
`

export default class Etapa1 extends React.Component {
    state ={
        inputNome:'',
        inputIdade:'',
        inputEmail:''
    }

    valorInputNome = (e) => {
        this.setState({inputNome: e.target.value})
    }

    valorInputIdade = (e) => {
        this.setState({inputIdade: e.target.value})
    }

    valorInputEmail = (e) => {
        this.setState({inputEmail: e.target.value})
    }

    verificaResposta = () => {
        if (this.state.inputNome && this.state.inputIdade && this.state.inputEmail) {
            this.props.botaoProximo()
        } else {alert('Preencha todos os campos antes de ir para a próxima etapa.')}
    }

    render() {
        return (
            <div>
                <Titulo>Etapa1: Dados Gerais</Titulo>
                <p>1. Qual seu nome?</p>
                <input
                onChange={this.valorInputNome}
                value={this.state.inputNome}
                />
                <p>2. Qual sua idade?</p>
                <input
                onChange={this.valorInputIdade}
                value={this.state.inputIdade}
                />
                <p>3. Qual seu e-mail?</p>
                <input
                onChange={this.valorInputEmail}
                value={this.state.inputEmail}
                />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
                <br/>
                <Botao onClick={this.verificaResposta}>Próxima Etapa</Botao>
            </div>
        )
    }
}