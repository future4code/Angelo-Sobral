import React from 'react'
import axios from 'axios'
import { baseUrl, headers } from './utils/Api'

export class Playlist extends React.Component {

    state = {
        playlists: [],
        tracks: []
    }

    componentDidMount() {
        this.getAllPlaylist()
    }

    getAllPlaylist = async () => {
        try {
            const res = await axios.get(baseUrl, headers)
            this.setState({playlists: res.data.result.list}, ()=> console.log(this.state.playlists))
        } catch (err) {
            console.log(err)
        }
    }

    deletePlaylist = async (id) => {
        try{
            await axios.delete(`${baseUrl}/${id}`, headers)
        } catch (err) {
            console.log(err)
        }
    }

    getTracks = async (id) => {
        try{
            const res = await axios.get(`${baseUrl}/${id}/tracks`, headers)
            this.setState({tracks: res.data.result.tracks}, () => console.log(this.state.tracks))
        } catch (err) {
            console.log(err)
        }
    }

    render() {

        const playlists = this.state.playlists.map((list) => {
            return (
                <div>
                    <li key={list.id}>{list.name}</li>
                    <button onClick={() => this.getTracks(list.id)}>Detalhes</button>
                    <button onClick={() => this.deletePlaylist(list.id)}>Deletar</button>
                </div>)
        })

        return (
            <div>
                {playlists}
            </div>
        )
    }
}