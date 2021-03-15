import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
width: 60%;
margin: 0 auto;
`
export default class EtapaFinal extends React.Component {
    render() {
        return (
            <div>
                <Titulo>O formulário acabaou!</Titulo>
                <p>Agradecemos sua participação. Em breve entraremos em contato.</p>
            </div>
        )
    }
}