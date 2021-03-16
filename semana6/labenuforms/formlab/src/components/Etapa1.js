import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
width: 60%;
margin: 0 auto;
`
const Botao = styled.button`
margin: 40px 10px;
`
const ParagrafoErro = styled.p`
color: red;
`

export default class Etapa1 extends React.Component {
    state ={
        inputNome:'',
        inputIdade:'',
        inputEmail:'',
        erroNome:'',
        erroIdade:'',
        erroEmail:'',
        escolaridade:''
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
        } else {
            alert('Preencha todos os campos antes de ir para a próxima etapa.')
        if (!this.state.inputNome) {this.setState({erroNome: 'Preencha o nome'})} else {this.setState({erroNome: ''})}
        if (!this.state.inputIdade) {this.setState({erroIdade: 'Preencha a idade'})} else {this.setState({erroIdade: ''})}
        if (!this.state.inputEmail) {this.setState({erroEmail: 'Preencha o e-mail'})} else {this.setState({erroEmail: ''})}
        }
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
                {/* fiz assim pra testar outra forma */}
                {!this.state.erroNome ? (<p></p>) : (<ParagrafoErro>{this.state.erroNome}</ParagrafoErro>)}
                <p>2. Qual sua idade?</p>
                <input
                onChange={this.valorInputIdade}
                value={this.state.inputIdade}
                />
                {this.state.erroIdade && (<ParagrafoErro>{this.state.erroIdade}</ParagrafoErro>)}
                <p>3. Qual seu e-mail?</p>
                <input
                onChange={this.valorInputEmail}
                value={this.state.inputEmail}
                />
                {this.state.erroEmail && (<ParagrafoErro>{this.state.erroEmail}</ParagrafoErro>)}
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