import React from "react";
import { useHistory } from "react-router-dom";
import CardAdminDetails from "../../components/CardAdminDetails";
import { useRequestData } from "../../hooks/useRequestData";


const AdiminHomePage = () => {
  const history = useHistory();
  const data = useRequestData("/trips", []);
  
  const token = window.localStorage.getItem("tokenLabeX");

  const logout = () => {
    window.localStorage.removeItem("tokenLabeX");
    history.push("/login");
  };

  return (
    <>
      {token ? (
        <>
          <CardAdminDetails data={data} logout={logout} />
        </>
      ) : (
        <div>Você precisa estar logado para acessar essa página</div>
      )}
    </>
  );
};

export default AdiminHomePage;
