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

export default class Etapa2 extends React.Component {
    state = {
        curso:'',
        institnuicao:'',
        erroCurso:'',
        erroInstituicao:''
    }

    inputCurso = (e) => {
        this.setState({curso: e.target.value})
    }

    inputIntituicao = (e) => {
        this.setState({institnuicao: e.target.value})
    }

    verificaResposta = () => {
        if (this.state.curso && this.state.institnuicao) {
            this.props.botaoProximo()
        } else {
            alert('Preencha todos os campos antes de ir para próxima etapa.')
            if (!this.state.curso) {this.setState({erroCurso: 'Preencha qual curso'})} else {this.setState({erroCurso: ''})}
            if (!this.state.institnuicao) {this.setState({erroInstituicao: 'Preencha qual Instituição'})} else {this.setState({erroInstituicao: ''})}
        }
    }

    render() {
        return (
            <div>
                <Titulo>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior</Titulo>
                <p>5. Qual curso?</p>
                <input
                onChange={this.inputCurso}
                value={this.state.curso}
                />
                {this.state.erroCurso && (<ParagrafoErro>{this.state.erroCurso}</ParagrafoErro>)}
                <p>6. Qual instituição de ensino?</p>
                <input
                onChange={this.inputIntituicao}
                value={this.state.inputIntituicao}
                />
                {this.state.erroInstituicao && (<ParagrafoErro>{this.state.erroInstituicao}</ParagrafoErro>)}
                <br/>
                <Botao onClick={this.props.botaoVoltar}>Voltar Etapa</Botao>
                <Botao onClick={this.verificaResposta}>Próxima Etapa</Botao>
            </div>
        )
    }
}