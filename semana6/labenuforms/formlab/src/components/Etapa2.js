import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
width: 60%;
margin: 0 auto;
`
const Botao = styled.button`
margin: 40px 10px;
`

export default class Etapa2 extends React.Component {
    render() {
        return (
            <div>
                <Titulo>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior</Titulo>
                <p>5. Qual curso?</p>
                <input/>
                <p>6. Qual instituição de ensino?</p>
                <input/>
                <br/>
                <Botao onClick={this.props.botaoVoltar}>Voltar Etapa</Botao>
                <Botao onClick={this.props.botaoProximo}>Próxima Etapa</Botao>
            </div>
        )
    }
}