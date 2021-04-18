import React from "react";
import { useHistory } from "react-router-dom";
import CardAdminDetails from "../../components/CardAdminDetails";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useRequestData } from "../../hooks/useRequestData";
import { CardInfo, Main, MainContainer } from "./style";

//props para o header
const h1 = "Painel de Controle"

const AdiminHomePage = () => {
  const history = useHistory();
  const data = useRequestData("/trips", []);
  
  const user = window.localStorage.getItem("emailLogin")
  
  const token = window.localStorage.getItem("tokenLabeX");

  const logout = () => {
    window.localStorage.removeItem("tokenLabeX");
    history.push("/login");
  };

  return (
    <Main>
      {token ? (
        <>
      <HeaderAdmin logout={logout} h1={h1}/>
      <MainContainer>
        <CardInfo>
        <p>Bem vindo, <span>{user}</span>! Você está logado no painel de controle da LabeX. Aqui gerenciamos todas as viagens, acessando os detalhes de cada uma delas, criando novas viagens ou deletando viagens existentes.</p>
        </CardInfo>
       
          <CardAdminDetails data={data} />
          </MainContainer>
        </>
      ) : (
        <div>Você precisa estar logado para acessar essa página</div>
      )}
      
    </Main>
  );
};

export default AdiminHomePage;