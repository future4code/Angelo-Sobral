import React from 'react'
import styled from 'styled-components'
import { baseUrl, headers } from './utils/Api'
import axios from 'axios'

export default class Details extends React.Component {

    state={
        tracks:[]
    }

    componentDidMount() {
        this.getTracks()
    }

    getTracks = async () => {
        try{
            const res = await axios.get(`${baseUrl}/${this.props.listID}/tracks`, headers)
            this.setState({tracks: res.data.result.tracks})
        } catch (err) {
            console.log(err)
        }
    }

    render () {

        const trackList = this.state.tracks.map((data) => {
            return (
                <Div key={data.id}>
                    <p>Artista: {data.artist}</p>
                    <p>Música: {data.name}</p>
                    <iframe width="320" height="240" src={data.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Div>
            )
        })

        return (
            <div>
                <Button onClick={this.props.handlePage}>Voltar</Button>
                {trackList}
            </div>
        )
    }
}

const Div = styled.div`
color: #fff;
margin-bottom: 1.5rem;
background-color: #e8e8e8;
padding: 5px 10px;
color: #317c91;
font-weight: 600;
`
const Button = styled.button`
border: none;
height: 35px;
padding: 0 15px;
background-color: #589e9c;
transition: .3s;
cursor: pointer;
color: #fff;
font-weight: 600;
text-transform: uppercase;
outline: none;

:hover {
    background-color: #317c91;
}
`