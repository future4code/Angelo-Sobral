import React from 'react'
import axios from 'axios'
import { baseUrl, headers } from './utils/Api'

export class Playlist extends React.Component {

    state = {
        playlists: [],

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

    render() {

        return (
            <div>
                
            </div>
        )
    }
}