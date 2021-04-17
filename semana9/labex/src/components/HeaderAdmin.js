import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components"
import { goToCreteTripPage } from "../routes/coordinator";

const HeaderAdmin = (props) => {
  const history = useHistory()
  const logout = props.logout

  return (
    <Header>
      <Logo><h2>LabeX</h2></Logo>
      <h1>Página do Administrador</h1>
      <div>
      <button onClick={() => goToCreteTripPage(history)}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
      </div>
    </Header>
  );
};

export default HeaderAdmin;

const Header = styled.header`
width: 100%;
height: 60px;
backdrop-filter: blur(7px);
background: hsla(0, 0%, 100%, 0.438);
color: #2f0444;
padding: 0 30px;

display: flex;
align-items: center;
justify-content: space-between;
position: fixed;

h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}

button{
    border: none;
    outline: none;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 3px;
    color: #f4f4f4;
    background-color: #2f0444;
    margin-left: 10px;

    :hover {
      background-color: #3a0555;
      box-shadow: 0 4px 8px 0 rgb(0 9 2 / 52%);
      transform: translateY(-1px);
    }

    :active {
      transform: translateY(1px);
      box-shadow: none;
    }
}

`
const Logo = styled.div`
height: 40px;
width: 100px;
display: flex;
justify-content: space-between;
align-items: center;
`