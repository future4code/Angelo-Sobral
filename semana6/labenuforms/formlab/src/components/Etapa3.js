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

export default class Etapa3 extends React.Component {
    state = {
        naoFezGraduacao:'',
        erroGraduacao:''
    }

    inputNaoFezGraduacao = (e) => {
        this.setState({naoFezGraduacao: e.target.value})
    }

    verificaResposta = () => {
        if (this.state.naoFezGraduacao) {
            this.props.botaoProximo()
        } else {
            alert('Preencha todos os campos antes de ir para próxima etapa.')
            if (!this.state.naoFezGraduacao) {this.setState({erroGraduacao: 'Preencha o motivo'})} else {this.setState({erroGraduacao: ''})}
        }
    }

    render() {
        return (
            <div>
                <Titulo>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</Titulo>
                <p>5. Porque você não iniciou um curso de graduação?</p>
                <input
                onChange={this.inputNaoFezGraduacao}
                value={this.state.naoFezGraduacao}
                />
                {this.state.erroGraduacao && (<ParagrafoErro>{this.state.erroGraduacao}</ParagrafoErro>)}
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
                <br/>
                <Botao onClick={this.props.botaoVoltar}>Voltar Etapa</Botao>
                <Botao onClick={this.verificaResposta}>Próxima Etapa</Botao>
            </div>
        )
    }
}