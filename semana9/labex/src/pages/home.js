import React from "react";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import BaseBg from "../assets/images/bg-base.png"
import TopBg from "../assets/images/bg-top.png"
import MoonBg from "../assets/images/moon.png"
import {goToListTripPage, goToLoginPage } from "../routes/coordinator";

const HomePage = () => {
    const history = useHistory()
    const token = window.localStorage.getItem('tokenLabeX')

    return(
    <Main>
        <MoonIMG src={MoonBg} alt="moon"/>
        <TopIMG src={TopBg} alt="space"/>
        <MainCard>
            <>
            <h1>Sejam bem vindos a LabeX!</h1>
            <p>Somos a melhor agência de viagens espacias de toda via lactea!</p>
            <p>Se você sempre sonhou em fazer uma viagem espacial, chegou o momento. Conheça nossos destinos, candidate-se em uma de nossas aventuras, e nos convença a escolher você para reinventar o conceito de viagens ao redor da galáxia!</p>
            </>
            <DivButtons>
            <button onClick={()=> {goToListTripPage(history)}}>Nossas Viagens</button>
            <button onClick={()=> {goToLoginPage(history, token)}}>Acesso do Admin</button>
            </DivButtons>
        </MainCard>
    </Main>
    )
}

export default HomePage

const translate = keyframes`
0% {
    transform: translateX(850%) translateY(-110px) rotate(-170deg) ;
}

100% {
    transform: translateX(-200px) translateY(300px)
}
`

const Main = styled.main`
background: url(${BaseBg}) no-repeat;
background-size: cover;
height: 100vh;
max-width: 1440px;
position: relative;
overflow: hidden;
`

const MainCard = styled.div`
height: 60%;
width: 40%;
min-width: 360px;
min-height: 436px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
backdrop-filter: blur(4px);
background: hsla(0,0%,100%,.438);
border-radius: 10px;
z-index: 100;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 8px 32px 0 rgb(0 9 2 / 82%), inset 0 8px 32px 0 rgb(28 30 69 / 52%);
padding: 20px 30px; 
border: 1px solid #f4f4f4;

h1{
    margin-bottom: 12px;

    @media (max-width: 1024px) {
        font-size: 24px;
    }

    @media (max-width: 768px) {
        font-size: 21px;
    }
}

p{
    font-size: 20px;
    font-weight:500;
    text-align: justify;
    margin-bottom: 12px;

    @media (max-width: 1024px) {
        font-size: 17px;
        letter-spacing: 1px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        letter-spacing: 1px;
    }
}

button{
    padding: 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    text-transform: uppercase;
    background-color: #2f0444;
    
    color: #f4f4f4;
    font-weight: 400;
    cursor: pointer;
    transition: .3s;

    :hover{
        background-color: #3A0555;
        box-shadow: 0 4px 8px 0 rgb(0 9 2 / 52%);
        transform: translateY(-2px)
    }

    :active{
        transform: scale(1.1);
    }
}
`

const DivButtons = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const MoonIMG = styled.img`
width: 120px;
object-fit: cover;
position: absolute;
left: 30px;
animation: ${translate} 30s linear infinite;
z-index: -1;
`

const TopIMG = styled.img`
object-fit: cover;
position: absolute;
top: -110px;
left: -110px;
z-index: -2;

@media (min-width: 1440px) {
width: 100%;
object-fit: cover;
position: absolute;
top: 1px;
left: 0;
}
`
