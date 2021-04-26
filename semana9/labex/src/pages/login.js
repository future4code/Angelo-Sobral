import React, { useState } from "react";
import styled from "styled-components"
import BaseBg from "../assets/images/login.jpg"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { URL_LOGIN } from "../utils/apiUtils";
import { goToAdminHomePage } from "../routes/coordinator";

const LoginPage = () => {
    const history = useHistory()

    const [input, setIinput] = useState({email: '', password: ''})
   
    const onChange = (e) => {
        const {name, value} = e.target
        setIinput({...input, [name]: value})
    }

    const login = () => {
        const body = {
            email: input.email,
            password: input.password
        }

        axios.post(URL_LOGIN, body)
        .then((res) => {
            window.localStorage.setItem("tokenLabeX", res.data.token)
            goToAdminHomePage(history)
        })
        .catch((err) => {
            console.log(err)
            setIinput({email: '', password: ''})
        })

    }

    return (
    <MainContainer>
        <CardLogin>
            <h1>LabeX - Login</h1>
            <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" name="email" type="email" value={input.email} onChange={onChange} placeholder="E-mail"/>
            <input required name="password" type="password" value={input.password} onChange={onChange} placeholder="Senha"/>
            <button onClick={login}>Entrar</button>
        </CardLogin>
    </MainContainer>
    )
}

export default LoginPage

const MainContainer = styled.main`
height: 100vh;
width: 100%;
background: url(${BaseBg}) no-repeat center;
background-size: cover;
`

const CardLogin = styled.div`
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
