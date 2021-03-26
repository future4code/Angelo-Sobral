import React from 'react'
import axios from 'axios'
import { baseUrl, headers } from './utils/Api'


export default class CreatePlaylist extends React.Component {

    state = {
        playlistName: '',
    }

    handlePlaylistName = e => this.setState({ playlistName: e.target.value})

    onClickCreatePlaylist = () => {
        this.createPlaylist()
        this.setState({playlistName: ''})
    }

    createPlaylist = async () => {
        const body = { name: this.state.playlistName}

        try{
            await axios.post(baseUrl, body, headers)
        } catch (err) {
            console.log(err)
        }
    }

    render() {

        return (
            <div>
                <input 
                onChange={this.handlePlaylistName}
                value={this.playlistName}
                />
                <button onClick={this.onClickCreatePlaylist}>Criar</button>
            </div>
        )
    }
}