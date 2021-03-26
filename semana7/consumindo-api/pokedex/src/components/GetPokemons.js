import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { baseUrl } from '../Params'


export default class GetPokemons extends React.Component {

    state = {
        pokemonData: [],
        pokemonName: '',
        pokemonType: [],
        loading: true
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
            this.setState({ pokemonData: arrayPoke, pokemonType: response.data.types, loading: false})
        } catch (err) {
            alert('Ops! Acho que você digitou alguma coisa que não é um pokemon!')
        }
    }

    render () {

        const typePokemon = this.state.pokemonType.map((pkm) => {
            return <Span color={typeColors[pkm.type.name]}> {pkm.type.name} </Span>
        })

        const statsPokemons = this.state.pokemonData.map((data) => {
            return (
            <Card colorBg={typeColors[data.types[0].type.name]}>
                <img src={data.sprites.other['official-artwork'].front_default} alt={'Imagem Pokemon'}/>
                <NamePkm>{data.name}</NamePkm>
                <div>
                    <p>Type <br/>{typePokemon}</p>
                    <p>Height {data.height / 10} m</p>
                    <p>Weight {data.weight / 10} kg</p>
                </div>
            </Card>)
        })

        return (
            <MainContainer>
                <Div>
                    <Logo src={'https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67'}/>
                    <input
                    type={'text'}
                    placeholder={'Pokemon'}
                    onChange={this.handlePokeName}
                    value={this.state.pokemonName}
                    onKeyDown={this.searchEnter}
                    />
                </Div>
                {statsPokemons} 
                
            </MainContainer>
        )
    }
}

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

input {
    height: 50px;
    outline: none;
    border: 2px solid #c00000;
    margin-bottom: 1rem;
    padding: 0 5px;
    width: 500px;
    border-radius: 10px;
    position: absolute;
    top: 122px;
    box-sizing: border-box;
    text-transform: capitalize;
}
`

const Div = styled.div`
width: 500px;
`

const Card = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 300px;
width: 500px;
background-color: ${props => props.colorBg};
position: relative;
border-radius: 10px;
text-align: center;

p {
    font-weight: 700;
}

img {
    width: 200px;
    height: 200px;
}
`
const NamePkm = styled.p`
position: absolute;
left: 15%;
top: 65%;
font-size: 2rem;
font-weight: 700;
text-transform: capitalize;
`
const Span = styled.p`
margin-top: 10px;
padding: 5px;
border: 2px solid #FFF;
border-radius: 5px;
letter-spacing: 2px;
background-color: ${props => props.color}
`

const Logo = styled.img`

   position: absolute;
   top: 30px;
   left: 50%;
   width: 500px;
   transform: translateX(-50%)
`

const typeColors = {
fire: "#EE8130",
grass: "#7AC74C",
water: "#6390F0",
bug: "#A6B91A",
normal: "#A8A77A",
flying: "#A98FF3",
fighting: "#C22E28",
ghost: "#735797",
ground: "#E2BF65",
ice: "#96D9D6",
poison: "#A33EA1",
psychic: "#F95587",
rock: "#B6A136",
dragon: "#6F35FC",
electric: "#F7D02C",
fairy: "#D685AD",
steel: "#808080",
dark: "#301934"
}

