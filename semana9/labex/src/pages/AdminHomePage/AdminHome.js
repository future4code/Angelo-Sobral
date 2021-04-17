import React from "react";
import { useHistory } from "react-router-dom";
import CardAdminDetails from "../../components/CardAdminDetails";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useRequestData } from "../../hooks/useRequestData";
import { CardInfo, Main, MainContainer } from "./style";

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
      <HeaderAdmin logout={logout}/>
      <MainContainer>
        <CardInfo>
        <p>Bem vindo, <span>{user}</span>! Você está logado no painel de controle da LabeX. Aqui gerenciamos todas as viagens, acessando os detalhes de cada uma delas, criando novas viagens ou deletando viagens existentes.</p>
        </CardInfo>
       {token ? (
        <>
          <CardAdminDetails data={data} />
        </>
      ) : (
        <div>Você precisa estar logado para acessar essa página</div>
      )}
      </MainContainer>
    </Main>
  );
};

export default AdiminHomePage;
