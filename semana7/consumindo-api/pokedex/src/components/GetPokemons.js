import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from '../Params'


export default class GetPokemons extends React.Component {

    state = {
        pokemonData: [],
        pokemonName: '',
        pokemonType: [],
        imgPokemon: ''
    }

    handlePokeName = (e => this.setState({pokemonName: e.target.value.toLowerCase()}))

    searchClick = () => {this.getPokemon()}

    searchEnter = (e => e.key === 'Enter' && this.searchClick())


    getPokemon = async () => {
        const pokemonName = this.state.pokemonName
        const arrayPoke = []
        try {
            const response = await axios.get(`${baseUrl}${pokemonName}`)
            arrayPoke.push(response.data)
            this.setState({ pokemonData: arrayPoke})
            this.setState({pokemonType: response.data.types})
            this.setState({imgPokemon: response.data.sprites.other['official-artwork'].front_default})
        } catch (err) {
            console.log(err)
        }
    }

    render () {

        // console.log('array tipos', this.state.pokemonData)
        // console.log('array tipos', this.state.pokemonType)

        const tipoPkm = this.state.pokemonType.map((pkm) => {
            return <span>{pkm.type.name}</span>
        })

        const typePokemons = this.state.pokemonData.map((data) => {
            return (
            <div>
                <img src={data.sprites.other['official-artwork'].front_default} alt={'Imagem Pokemon'}/>
                <p>Name <p>{data.name}</p></p>
                {tipoPkm}
                {/* <p>Type {data.types.type.name}</p> */}
                {/* <p>Type {this.state.pokemonType}</p> */}
                <p>Height {data.height}</p>
                <p>Weight {Math.round(data.weight / 10)} kg</p>
                <p>Evolved to</p>
            </div>)
        })

        return (
            <div>
                <input
                placeholder={'Pokemon'}
                onChange={this.handlePokeName}
                value={this.state.pokemonName}
                onKeyDown={this.searchEnter}
                />
                <button onClick={this.searchClick}>Buscar</button>
                {typePokemons}
                
            </div>
        )
    }
}