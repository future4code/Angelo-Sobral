import React from 'react'
import axios from 'axios'
import { baseUrl, headers } from './utils/Api'
import styled from 'styled-components'
import Details from './Details'

export class Playlist extends React.Component {

    state = {
        playlists: [],
        tracks: [],
        detailPage: true
    }

    componentDidUpdate() {
        this.getAllPlaylist()
    }

    componentDidMount() {
        this.getAllPlaylist()
    }

    getAllPlaylist = async () => {
        try {
            const res = await axios.get(baseUrl, headers)
            this.setState({playlists: res.data.result.list})
        } catch (err) {
            console.log(err)
        }
    }

    deletePlaylist = async (id) => {
        try{
            await axios.delete(`${baseUrl}/${id}`, headers)
            alert('Playlist deletada com sucesso!')
        } catch (err) {
            console.log(err)
        }
    }

    handleDetailPage = (id) => {
        this.state.detailPage
        ?
        this.setState({detailPage: false, listID: id})
        :
        this.setState({detailPage: true, listID: ''})
    }
    

    render() {

        const playlists = this.state.playlists.map((list) => {
            return (
                <ContainerList key={list.id}>
                    <li>{list.name}</li>
                    <button onClick={() => this.handleDetailPage(list.id)}>Detalhes</button>
                    <button onClick={() => this.deletePlaylist(list.id)}>Deletar</button>
                </ContainerList>)
        })

        return (<ContainerArea>
            {
            this.state.detailPage
            ?
            (<>
                <h2>Playlists criadas</h2>
                {playlists}
                <Button onClick={this.props.handlePage}>Voltar</Button>
            </>)
            :
            <Details 
            listID={this.state.listID}
            handlePage={this.handleDetailPage}
            />
            }
            </ContainerArea>
        )
    }
}

const ContainerArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
min-height: 50%;
max-height: 80%;
width: 30%;
min-width: 370px;
padding: 1rem;
overflow: hidden;
overflow-y: auto;
box-shadow: 3px 5px 10px #589e9c, -3px -5px 10px #589e9c,
inset 3px 5px 9px #317c91, inset -3px -5px 9px #317c91;
z-index: 1;
border: solid 4px #1a1a1a;

h2 {
    margin: 0 0 1rem 0;
    color: #317c91;
}

`

const Button = styled.button`
border: none;
margin: 0 5px;
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
    transform: scale(1.05)
}
`

const ContainerList = styled.div`
color: #fff;
display: flex;
align-items: center;
margin-bottom: 1.5rem;

li {
    list-style: none;
    margin: 5px;
    color: #317c91;
    font-weight: 700;
}

button {
    border: none;
    margin: 0 5px;
    height: 25px;
    background-color: #317c91;
    transition: .3s;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    outline: none;

    :hover {
        background-color: #589e9c;
        transform: scale(1.05)
    }
}
`