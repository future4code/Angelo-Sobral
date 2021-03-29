import React from 'react'
import axios from 'axios'
import { baseUrl, headers } from './utils/Api'
import styled from 'styled-components'


export default class CreatePlaylist extends React.Component {

    state = {
        playlistName: '',
    }

    handlePlaylistName = e => this.setState({ playlistName: e.target.value})

    onClickCreatePlaylist = () => {
        this.createPlaylist()
        this.setState({ playlistName: ''})
    }

    createPlaylist = async () => {
        const body = { name: this.state.playlistName}

        try{
            await axios.post(baseUrl, body, headers)
            
            alert(`Playlist criada com sucesso!`)
        } catch (err) {
            
            alert('Ops! Acho que já cadastrou essa playlist. :)')
        }
    }

    render() {

        return (
            <Container>
                <h1>Labefy - Onde a música toca a alma!</h1>
                <h3>Crie uma playlist para cada momento de sua vida :)</h3>
                <Input 
                onChange={this.handlePlaylistName}
                value={this.playlistName}
                />
                <button onClick={this.onClickCreatePlaylist}>Criar playlist</button>
                <button onClick={this.props.handlePage}>Acesse suas playlists</button>
            </Container>
        )
    }
}

const Container = styled.div`
margin-top: -50px;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
z-index: 1;

h1, h3 {
    color: #317c91;
}

h1 {
    color: #317c91;
    border: 2px solid;
    border-top: none;
    border-radius: 20px;
    border-right: none;
    border-left: none;
    padding: 0 15px 5px;
}

button {
    padding: 8px 20px;
    border: none;
    background-color: #317c91;
    transition: .3s;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 1.5rem;
    outline: none;

    :hover {
        background-color: #589e9c;
        transform: scale(1.05)
    }
}
`

const Input = styled.input`
width: 80%;
height: 30px;
border: 2px solid #317c91;
margin-bottom: 1.5rem;
background-color: #1a1a1a;
color: #fff;
outline: none;
padding: 0 10px;
box-sizing: border-box;
`