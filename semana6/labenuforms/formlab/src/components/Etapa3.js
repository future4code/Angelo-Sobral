import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
width: 60%;
margin: 0 auto;
`
const Botao = styled.button`
margin: 40px 10px;
`

export default class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <Titulo>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</Titulo>
                <p>5. Porque você não iniciou um curso de graduação?</p>
                <input/>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
                <br/>
                <Botao onClick={this.props.botaoVoltar}>Voltar Etapa</Botao>
                <Botao onClick={this.props.botaoProximo}>Próxima Etapa</Botao>
            </div>
        )
    }
}